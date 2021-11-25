const
  gulp = require('gulp'),
  eventStream = require('event-stream'),
  gulpLoadPlugins = require('gulp-load-plugins'),
  del = require('del'),
  path = require('path'),
  size = require('gulp-size'),
  uri = require('urijs'),
  urljoin = require('url-join'),
  s = require('underscore.string'),
  stringifyObject = require('stringify-object'),
  argv = require('yargs').argv,
  hawtio = require('hawtio-node-backend');

const package = require('./package.json');
const plugins = gulpLoadPlugins({});

const config = {
  main: '.',
  ts: ['plugins/**/*.ts'],
  dist: argv.out || './dist/',
  js: 'hawtio-kubernetes-api.js',
  dts: 'hawtio-kubernetes-api.d.ts',
  sourceMap: argv.sourcemap
};

const tsProject = plugins.typescript.createProject('tsconfig.json');

const normalSizeOptions = {
  showFiles: true
};
const gZippedSizeOptions = {
  showFiles: true,
  gzip: true
};

gulp.task('tsc', function () {
  const tsResult = tsProject.src()
    .pipe(plugins.if(config.sourceMap, plugins.sourcemaps.init()))
    .pipe(tsProject())
    .on('error', plugins.notify.onError({
      onLast: true,
      message: '<%= error.message %>',
      title: 'Typescript compilation error'
    }));

  return eventStream.merge(
    tsResult.js
      .pipe(plugins.ngAnnotate())
      .pipe(plugins.if(config.sourceMap, plugins.sourcemaps.write()))
      .pipe(gulp.dest('.')),
    tsResult.dts
      .pipe(plugins.rename(config.dts))
      .pipe(gulp.dest(config.dist)));
});

gulp.task('concat', ['tsc'], function () {
  const gZipSize = size(gZippedSizeOptions);
  return gulp.src(['compiled.js'])
    .pipe(plugins.concat(config.js))
    .pipe(size(normalSizeOptions))
    .pipe(gZipSize)
    .pipe(gulp.dest(config.dist));
});

gulp.task('clean', ['concat'], function () {
  return del(['compiled.js']);
});

gulp.task('watch', ['build'], function () {
  plugins.watch(['node_modules/**/*.js', 'index.html', config.dist + '/' + config.js], ['reload']);
  plugins.watch(['node_modules/**/*.d.ts', config.ts], ['tsc', 'template', 'concat', 'clean']);
});

gulp.task('connect', ['watch'], function () {
  // lets disable unauthorised TLS issues with kube REST API
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  const kubeBase = process.env.KUBERNETES_MASTER || 'https://localhost:8443';
  const kube = uri(kubeBase);
  console.log("Connecting to Kubernetes on: " + kube);

  const staticAssets = [{
    path: '/',
    dir: '.'
  }];

  const localProxies = [];
  const defaultProxies = [
    {
      proto: kube.protocol(),
      port: kube.port(),
      hostname: kube.hostname(),
      path: '/kubernetes',
      targetPath: '/',
    }, {
      proto: kube.protocol(),
      hostname: kube.hostname(),
      port: kube.port(),
      path: '/jolokia',
      targetPath: '/hawtio/jolokia'
    }, {
      proto: kube.protocol(),
      hostname: kube.hostname(),
      port: kube.port(),
      path: '/git',
      targetPath: '/hawtio/git'
    }
  ];

  const staticProxies = localProxies.concat(defaultProxies);

  hawtio.setConfig({
    port: process.env.DEV_PORT || 2772,
    staticProxies: staticProxies,
    staticAssets: staticAssets,
    fallback: 'index.html',
    liveReload: {
      enabled: true,
    }
  });
  const debugLoggingOfProxy = process.env.DEBUG_PROXY === "true";
  const useAuthentication = process.env.DISABLE_OAUTH !== "true";

  const googleClientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
  const googleClientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;

  const token = process.env.TOKEN;

  hawtio.use('/osconsole/config.js', function (req, res, next) {
    const config = {
      api: {
        openshift: {
          proto: kube.protocol(),
          hostPort: kube.host(),
        },
        k8s: {
          proto: kube.protocol(),
          hostPort: kube.host(),
        }
      }
    };
    if (googleClientId && googleClientSecret) {
      config.master_uri = kubeBase;
      config.google = {
        clientId: googleClientId,
        clientSecret: googleClientSecret,
        authenticationURI: "https://accounts.google.com/o/oauth2/auth",
        authorizationURI: "https://accounts.google.com/o/oauth2/auth",
        scope: "profile",
        redirectURI: "http://localhost:9000"
      };
    } else if (useAuthentication) {
      const namespace = process.env.NAMESPACE || 'hawtio';
      const clientId = process.env.CLIENT_ID || 'hawtio-online-dev';

      config.master_uri = kubeBase;
      config.openshift = {
        oauth_authorize_uri: urljoin(kubeBase, '/oauth/authorize'),
        oauth_client_id: `system:serviceaccount:${namespace}:${clientId}`,
        scope: 'user:info user:check-access role:edit:hawtio',
      };
    }
    if (token) {
      config.token = token;
    }
    const answer = "window.OPENSHIFT_CONFIG = window.HAWTIO_OAUTH_CONFIG = " + stringifyObject(config);
    res.set('Content-Type', 'application/javascript');
    res.send(answer);
  });

  // Accessed from hawtio-oauth bootstrap
  hawtio.use('/oauth/config.js', function (req, res, next) {
    res.set('Content-Type', 'application/javascript');
    res.send('// No data');
  });

  hawtio.use('/', function (req, res, next) {
    const path = req.originalUrl;
    // avoid returning these files, they should get pulled from js
    if (s.startsWith(path, '/plugins/') && s.endsWith(path, 'html')) {
      console.log("returning 404 for: ", path);
      res.statusCode = 404;
      res.end();
    } else {
      if (debugLoggingOfProxy) {
        console.log("allowing: ", path);
      }
      next();
    }
  });

  hawtio.listen(function (server) {
    const host = server.address().address;
    const port = server.address().port;
    console.log("started from gulp file at ", host, ":", port);
  });
});

gulp.task('reload', function () {
  gulp.src('.')
    .pipe(hawtio.reload());
});

gulp.task('version', function () {
  return gulp.src(path.join(config.dist, config.js))
    .pipe(plugins.replace('PACKAGE_VERSION_PLACEHOLDER', package.version))
    .pipe(gulp.dest(config.dist));
});

gulp.task('build', ['tsc', 'concat', 'clean']);

gulp.task('default', ['connect']);

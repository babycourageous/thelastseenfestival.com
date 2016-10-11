var config = {};

config.app    = ''; // The files Jekyll will work on
config.dist   = '_site/'; // The resulting static site
config.assets = '_assets/'; // The files Gulp will work on
config.nodedir = 'node_modules'; // npm directory for any external linked files

config.browsersync = {
  server: {
      baseDir: config.dist
  },
  // Don't show any notifications in the browser.
  notify: false
};

config.images = {
  src: config.assets + 'images/**/*',
  jekylldest: config.dist + 'assets/images',
  appdest: config.app + 'assets/images'
};

config.svg = {
  src: config.assets + 'svg/**/*',
  jekylldest: config.app + '_includes',
  options: {
    svg: {
      xmlDeclaration: false,
      doctypeDeclaration: false
    },

    mode: {
      inline: true,     // Prepare for inline embedding
      symbol: true      // Create a «symbol» sprite
    }
  }
};

config.scripts = {
  src: config.assets + 'scripts/**/*.js',
  jekylldest: config.dist + 'assets',
  appdest: config.app + 'assets/images'
};

config.styles = {
  src: config.assets + 'styles/styles.scss',
  jekylldest: config.dist + 'assets',
  appdest: config.app + 'assets',

  includePaths: [
    config.assets+'styles',
    config.nodedir+'/normalize.css',
    config.nodedir+'/bourbon/app/assets/stylesheets',
    config.nodedir + '/typi/scss',
    config.nodedir + '/modularscale-sass/stylesheets'
  ],

	autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  },
};

module.exports = config;

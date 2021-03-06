exports.files = {
  javascripts: {
    joinTo: {
      'js/vendor.js': /^(?!app)/,
      'js/app.js': /^app/
    }
  },
  stylesheets: {
    joinTo: {
      'css/app.css': /^app/,
      'css/app.css': /^app/
    }
  }
};

exports.modules = {
  autoRequire: {
    'js/app.js': ['initialize']
  }
};

exports.plugins = {
  browserSync: {
    files: ['*']
  }
};

exports.npm = {
  enabled: true,
  globals: {
    '$': 'jquery',
    'jQuery': 'jquery'
  },
  styles: {
    'normalize.css': ['normalize.css']
  }
};


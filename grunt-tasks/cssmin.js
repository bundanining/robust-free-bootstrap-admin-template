module.exports = function() {
  "use strict";

  return {
    css: {
      files: [{
        expand: true,
        cwd: '<%= config.destination.css %>',
        src: ['**/*.css', '!**/*.min.css'],
        dest: '<%= config.destination.css %>',
        ext: '.min.css',
        extDot: 'last'
      }]
    },
    css_rtl: {
      files: [{
        expand: true,
        cwd: '<%= config.destination.css_rtl %>',
        src: ['**/*.css', '!**/*.min.css'],
        dest: '<%= config.destination.css_rtl %>',
        ext: '.min.css',
        extDot: 'last'
      }]
    },
  };
};

module.exports = function () {
  "use strict";

  return {
    options: {
      config: '.csscomb.json'
    },
    css: {
      expand: true,
      cwd: '<%= config.destination.css %>',
      src: ['*.css', '!*.min.css'],
      dest: '<%= config.destination.css %>/'
    },
    css_rtl: {
      expand: true,
      cwd: '<%= config.destination.css_rtl %>',
      src: ['*.css', '!*.min.css'],
      dest: '<%= config.destination.css_rtl %>/'
    },
  };
};

module.exports = function () {
  "use strict";

  return {
    options: {
      browsers: '<%= config.autoprefixerBrowsers %>'
    },
    css: {
      options: {
        map: false
      },
      src: ['<%= config.destination.css %>/**/*.css', '!<%= config.destination.css %>/**/*.min.css']
    },
    css_rtl: {
      options: {
        map: false
      },
      src: ['<%= config.destination.css_rtl %>/**/*.css', '!<%= config.destination.css_rtl %>/**/*.min.css']
    }
  };
};

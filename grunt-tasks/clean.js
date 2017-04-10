module.exports = function () {
  "use strict";

  return {
    css: '<%= config.destination.css %>',
    css_rtl: '<%= config.destination.css_rtl %>',
    js: '<%= config.destination.js %>',
  };
};

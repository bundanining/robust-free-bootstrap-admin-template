module.exports = function () {
  "use strict";

  return {
    options: {
      enabled: true,
      duration: 2
    },
    js: {
      options: {
        message: 'JS Generated!'
      }
    },
    css: {
      options: {
        message: 'CSS Generated!'
      }
    },
    watching: {
      options: {
        message: 'Watching SCSS Change!'
      }
    },
    all: {
      options: {
        message: 'All Generated!'
      }
    }
  };
};

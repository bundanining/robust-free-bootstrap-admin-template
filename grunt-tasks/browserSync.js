module.exports = function () {
  "use strict";

  return {
    bsFiles: ["bin/*.js", "bin/*.css", "!**/node_modules/**/*"],
        options: {
            server: {
                baseDir: "./", // make server from root dir
                directory: true
            },
            port: 8000,
            ui: {
                port: 8080,
                weinre: {
                    port: 9090
                }
            },
            open: false
        }
    }
};
module.exports = function() {
    "use strict";

    return {
        sass: {
            files: ['<%= config.source.sass %>/**/*.scss'],
            tasks: ['sass-compile', 'autoprefixer:css'],
            options: {
                interrupt: false,
                spawn: false,
                // livereload: true,
            },
        }
    }
};
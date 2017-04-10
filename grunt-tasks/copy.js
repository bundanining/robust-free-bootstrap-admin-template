module.exports = function() {
    "use strict";

    return {
        js: {
            files:[{
                expand: true,
                cwd: '<%= config.source.js %>',
                src: '**/*',
                dest: '<%= config.destination.js %>',
            }],
        }
    };
};
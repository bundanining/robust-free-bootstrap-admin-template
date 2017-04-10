module.exports = function() {
    "use strict";

    return {
        options: {
            precision: 6,
            sourcemap: 'auto',
            style: 'expanded',
            trace: true,
            bundleExec: true,
        },
        main: {
            files: {
                '<%= config.destination.css %>/bootstrap.css': '<%= config.source.sass %>/bootstrap.scss',
                '<%= config.destination.css %>/bootstrap-extended.css': '<%= config.source.sass %>/bootstrap-extended.scss',
                '<%= config.destination.css %>/app.css': '<%= config.source.sass %>/app.scss',
                '<%= config.destination.css %>/colors.css': '<%= config.source.sass %>/colors.scss',
                '<%= config.destination.css %>-rtl/custom-rtl.css': '<%= config.source.sass %>/custom-rtl.scss',
                '<%= config.assets %>css/style.css': '<%= config.assets %>scss/style.scss',
                '<%= config.assets %>css/style-rtl.css': '<%= config.assets %>scss/style-rtl.scss',
            }
        },
        core: {
            files: [{
                expand: true,
                cwd: '<%= config.source.sass %>/core/',
                src: ['*/**/*.scss', '!*/**/_*.scss'],
                dest: '<%= config.destination.css %>/core/',
                ext: '.css'
            }]
        },
        pages: {
            files: [{
                expand: true,
                cwd: '<%= config.source.sass %>/pages/',
                src: ['*.scss', '!_*.scss'],
                dest: '<%= config.destination.css %>/pages/',
                ext: '.css'
            }]
        },
        plugins: {
            files: [{
                expand: true,
                cwd: '<%= config.source.sass %>/plugins/',
                src: ['*/**/*.scss', '!*/**/_*.scss'],
                dest: '<%= config.destination.css %>/plugins/',
                ext: '.css'
            }]
        }
    }
};
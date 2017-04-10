module.exports = function(grunt) {
    'use strict';

    var path               = require('path');
    global.myLayout        = grunt.option('Layout'); // Jade layout name
    global.myLayoutName    = grunt.option('LayoutName'); // Created layout folder name
    global.rtl             = '';

    //Suffix for rtl files includes in html
    if (grunt.option('TextDirection') !== undefined) {
        global.myTextDirection = grunt.option('TextDirection').toLowerCase(); // Text direction (Eg. LTR, RTL)
        if (myTextDirection == 'rtl')
            global.rtl = '-rtl';
    }
    else{
        global.myTextDirection = '';
    }


    require('load-grunt-config')(grunt, {
        // path to task.js files, defaults to grunt dir
        configPath: path.join(process.cwd(), 'grunt-tasks'),

        // auto grunt.initConfig
        init: true,

        // data passed into config.  Can use with <%= test %>
        data: {
            pkg: grunt.file.readJSON('package.json'),
            config: grunt.file.readJSON('config.json'),
            //color: grunt.file.readYAML('color.yml'),
            banner: '/*!\n' +
                ' * <%= pkg.name %> (<%= pkg.homepage %>)\n' +
                ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
                ' * Licensed under the <%= pkg.license %>\n' +
                ' */\n'
        },

        // can optionally pass options to load-grunt-tasks.
        // If you set to false, it will disable auto loading tasks.
        loadGruntTasks: {
            pattern: 'grunt-*',
            config: require('./package.json'),
            scope: ['devDependencies', 'dependencies']
        }
    });


    // Clean task.
    grunt.registerTask('dist-clean', ['clean:css', 'clean:js']);

    // JS distribution task.
    grunt.registerTask('dist-js', ['clean:js', 'copy:js', 'uglify:min', 'notify:js']);

    // CSS distribution task.
    grunt.registerTask('sass-compile', ['sass:main', 'sass:core', 'sass:pages', 'sass:plugins', 'notify:css']);
    grunt.registerTask('dist-css', ['clean:css', 'sass-compile', 'autoprefixer:css', 'csscomb:css', 'cssmin:css', 'notify:css']);
    grunt.registerTask('dist-css-rtl', ['clean:css_rtl', 'sass-compile', 'rtlcss', 'autoprefixer:css_rtl', 'csscomb:css_rtl', 'cssmin:css_rtl', 'notify:css']);

    // Full distribution task.
    grunt.registerTask('dist', ['dist-js', 'dist-css', 'notify:all']);

    // Watch jade & scss changes
    grunt.registerTask('monitor', ['concurrent:monitor']);
    // Start server
    grunt.registerTask('server', ['browserSync', 'notify:server']);

    //Default
    grunt.registerTask('default', 'dist');
};

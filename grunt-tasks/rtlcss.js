module.exports = function() {
    'use strict';

    return {
        // task options
        options: {
           'autoRename': false,
            'autoRenameStrict': false,
            'blacklist':{},
            'clean': true,
            'greedy': false,
            'processUrls': false,
            'stringMap':[]
        },
        rtlcss:{
            expand: true,
            cwd: '<%= config.destination.css %>',
            dest: '<%= config.destination.css_rtl %>',
            src: ['**/*.css', '!**/*.min.css'],
        }
    }
};

/*
 After you have changed any settings for the responsive_images task,
 run this with one of these options:
 "grunt" alone creates a new, completed images directory
 "grunt clean" removes the images directory
 "grunt responsive_images" re-processes images without removing the old ones
 */

module.exports = function (grunt) {

    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [
                        //{
                        //    width: 1920,
                        //    height: 1080,
                        //    suffix: '_large_2x',
                        //    quality: 50
                        //},
                        {
                            width: 1280,
                            height: 720,
                            suffix: '_large_1x',
                            quality: 50
                        },
                        {name: 'small', width: 320, quality: 30},
                        {name: 'medium', width: 640}]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'images/',
                    dest: 'images/'
                }]
            }
        }
        //,
        //responsive_images_extender: {
        //    main: {
        //        options: {
        //            sizes: [{
        //                selector: 'img',
        //                sizeList: [{
        //                    cond: 'min-width: 300px',
        //                    size: '50vw'
        //                }, {
        //                    cond: 'min-width: 700px',
        //                    size: '70vw'
        //                }, {
        //                    cond: 'default',
        //                    size: '100vw'
        //                }]
        //            }]
        //        },
        //        files: [{
        //            expand: true,
        //            src: ['**/*.{html,htm,php}'],
        //            cwd: 'src/',
        //            dest: 'dist/'
        //        }]
        //    }
        //},

        /* Clear out the images directory if it exists */
        //clean: {
        //    dev: {
        //        src: ['images']
        //    }
        //},

        /* Generate the images directory if it is missing */
        //mkdir: {
        //    dev: {
        //        options: {
        //            create: ['images']
        //        }
        //    }
        //},
        //
        ///* Copy the "fixed" images that don't go through processing into the images/directory */
        //copy: {
        //    dev: {
        //        files: [{
        //            expand: true,
        //            src: ['images_src/fixed/*.{gif,jpg,png}'],
        //            dest: 'images/',
        //            flatten: true
        //        }]
        //    }
        //}

    });

    grunt.loadNpmTasks('grunt-responsive-images');
    //grunt.loadNpmTasks('grunt-responsive_images_extender');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.registerTask('default', ['responsive_images']);

};

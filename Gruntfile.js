module.exports = function( grunt ) {
    //altera o encode dos arquivos
    // grunt.file.defaultEncoding = 'ISO 8859-1';

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),


        stripmq: {
            options: {
                width: 1500,
                type: 'screen'
            },

            all: {
                files: {
                    'assets/css/app-no-responsive.css' : 'assets/css/app.min.css'
                }
            }
        },

        concat: {
            options: {
                separator: ';'                             
            },
            dist: {
                src: [

                    'assets/js/plugins/*.js', 
                    'assets/js/project/*.js'                    
                    ],
                dest: 'js/app.js',
            },
        }, // concat


        jshint: {
            options: {
                jquery: true,
                onevar: true,
                maxerr : 5,
                indent : 4,
                force: true,
                curly: true,
                expr: true,
                loopfunc: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
            },
            files: {
                src: ['assets/js/project/*.js']
            }                         
        }, // jshint


        uglify : {
            options : {
                mangle : false,
                compress: {
                    drop_console: true
                }                               
            },

            my_target : {
                files : {
                    'assets/js/app.min.js' : [ 'assets/js/app.js' ]
                }
            }
        }, // uglify


        sass : {
            dev : {
                options : { 
                    style : 'nested' //nested, compact, compressed, expanded
                }, 
                files : {
                    'assets/css/app.css' : 'assets/css/sass/app.scss'
                }
            },
            dist : {
                options : { 
                    style : 'compressed' //nested, compact, compressed, expanded
                }, 
                files : {
                    'assets/css/app.min.css' : 'assets/css/sass/app.scss'
                }                
            }
        }, // sass    


        'svg-sprites': {
            create : {
                options: {
                    spriteElementPath: 'assets/svgs',
                    spritePath: 'assets/images/sprite.svg',
                    cssPath: 'assets/css/sass/generic/_sprite.scss',
                    //layout: 'packed', //packed , horizontal , vertical , diagonal
                    prefix: 'sprite'
                }
            }
        }, // svg-sprites        
       

        watch : {
            options: { spawn: false } ,                          
            dist : {
                files : [
                    'assets/js/**/*',
                    'assets/sass/**/*'
                ],
                tasks : [ 'jshint' ,  'sass:dev']
            },
        } // watch


    });


    // Plugins do Grunt
    grunt.loadNpmTasks( 'grunt-stripmq' );
    grunt.loadNpmTasks( 'grunt-dr-svg-sprites' );
    grunt.loadNpmTasks( 'grunt-contrib-concat' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-sass' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-jshint' );


    // Tarefas que serão executadas
    grunt.registerTask( 'default', [ 'jshint', 'concat', 'uglify', 'sass:dist', 'stripmq' ] );

    // Tarefa para Watch
    grunt.registerTask( 'w', [ 'watch' ] );
    // Tarefa para Gerar Sprite
    grunt.registerTask( 'sprite', [ 'svg-sprites' ] );

};
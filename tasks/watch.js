module.exports = function( grunt ) {
	grunt.config( 'watch', {
		options: {
			livereload: true,
			spawn: false
		},
		jade: {
			files: ['./assets/views/**/*.jade'],
			tasks: ['jade']
		},
		scripts: {
			files: [
				'./assets/javascripts/**/**/*.js'
			],
			tasks: [ 'jshint' ]
		},
		css: {
			files: [ './assets/stylesheets/sass/**/**/**/*.scss' ],
			tasks: [ 'sass:dev' ]
		}
	} );
};

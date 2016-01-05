module.exports = function( grunt ) {
	grunt.config( 'watch', {
		options: {
			livereload: true
		},
		scripts: {
			files: [
				'assets/javascripts/**/**/*.js'
			],
			tasks: [ 'jshint' ]
		},
		css: {
			files: [ 'assets/stylesheets/sass/**/**/**/*.scss' ],
			tasks: [ 'sass:dev' ]
		}
	} );
};

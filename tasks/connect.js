module.exports = function( grunt ) {
	grunt.config( 'connect', {
		server: {
			options: {
				port: 8000,
				livereload: true,
				open: true
			}
		}
	} );
};

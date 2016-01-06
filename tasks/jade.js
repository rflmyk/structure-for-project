module.exports = function( grunt ) {
	grunt.config( 'jade', {
		compile: {
			options: {
				client: false,
				pretty: true
			},
			files: [ {
				cwd: "./assets/views",
				src: ["**/*.jade"],
				dest: "./",
				expand: true,
				ext: ".html"
			} ]
		}
	} );
};

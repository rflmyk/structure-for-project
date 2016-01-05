module.exports = function( grunt ) {
	grunt.config( 'sass', {
		dev: {
			options: {
				style: 'nested'
			},
			files: {
				'/assets/stylesheets/compiled/app.css': '/assets/stylesheets/sass/app.scss'
			}
		},
		dist: {
			options: {
				style: 'compressed'
			},
			files: {
				'/assets/stylesheets/compiled/app.min.css': '/assets/stylesheets/compiled/app.css'
			}
		}
	} );
};

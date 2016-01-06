module.exports = function( grunt ) {

	require( 'load-grunt-tasks' )( grunt, {
		pattern: 'grunt-*',
		config: 'package.json',
		scope: 'devDependencies',
	} );

	grunt.loadTasks( './tasks' );

	grunt.registerTask( "default", [ 'jade','connect:server','watch' ] );
	grunt.registerTask( "deploy", [ 'usemin', 'sass:dist' ] );
};

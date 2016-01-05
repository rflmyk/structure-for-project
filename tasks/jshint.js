module.exports = function( grunt ) {
	grunt.config( 'jshint', {
		options: {
			"maxerr": 10,
			"expr": true,
			"node": true,
			"browser": true,
			"es5": true,
			"esnext": true,
			"bitwise": true,
			"camelcase": false,
			"curly": true,
			"eqeqeq": true,
			"immed": true,
			"indent": 4,
			"latedef": false,
			"newcap": true,
			"noarg": true,
			"quotmark": "single",
			"regexp": true,
			"undef": true,
			"unused": true,
			"strict": true,
			"trailing": false,
			"smarttabs": true,
			"white": false,
			"globals": {
				"$": false,
				"angular": true,
				"browser": false,
				"repeater": false,
				"element": false,
				"inject": false,
				"afterEach": false,
				"beforeEach": false,
				"confirm": false,
				"context": false,
				"describe": false,
				"expect": false,
				"it": false,
				"jasmine": false,
				"JSHINT": false,
				"mostRecentAjaxRequest": false,
				"qq": false,
				"runs": false,
				"spyOn": false,
				"spyOnEvent": false,
				"waitsFor": false,
				"xdescribe": false
			}
		},
		files: {
			src: [
				'/assets/javascripts/project/**/**/*.js',
			]
		}
	} );
};

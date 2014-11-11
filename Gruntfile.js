module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
				mangle: false
			},

			projects: {
				files: {
					'hyperhydration/hyperhydration.min.js'	: ['hyperhydration/hyperhydration.js'],
				//	'invasion/invasion.min.js'				: ['invasion/invasion.js']
				}
			}
		}
	});

	// load tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// tasks
	grunt.registerTask('default', ['uglify']);
};
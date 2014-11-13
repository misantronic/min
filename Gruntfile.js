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
					'wreckbars/wreckbars.min.js'			: ['wreckbars/wreckbars.js'],
					'tript/tript.min.js'					: ['tript/tript.js']
				//	'invasion/invasion.min.js'				: ['invasion/invasion.js']
				}
			}
		},

		regpack: {
			projects: {
				options: {
					globalVariables: 'tmpl',
					separator: ''
				},
				files: [
					{
						'wreckbars/wreckbars.packed.js'		: ['wreckbars/wreckbars.min.js']
					}
				]
			}
		}
	});

	// load tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-regpack');

	// tasks
	grunt.registerTask('default', ['uglify', 'regpack']);
};
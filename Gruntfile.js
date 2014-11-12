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
					'templates/templates.min.js'			: ['templates/templates.js'],
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
						'templates/templates.packed.js'		: ['templates/templates.min.js'],
						'tript/tript.packed.js'	: ['tript/tript.min.js']
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
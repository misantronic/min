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
					'templates2/templates2.min.js'			: ['templates2/templates2.js']
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
						'templates2/templates2.packed.js'	: ['templates2/templates2.min.js']
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
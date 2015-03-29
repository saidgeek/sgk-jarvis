'use strict';

module.exports = function(grunt) {

	grunt.initConfig({

	});

	grunt.task.registerTask('banner', function() {
			grunt.log.writeln(grunt.file.read('templates/.banner').green);
	});

	grunt.registerTask('default', ['banner']);

};

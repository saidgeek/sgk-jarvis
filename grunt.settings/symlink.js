'use strict';

module.exports = {

	gitconfig: {
		dest: '<%= config.git.path_gitconfig %>',
		relativeSrc: '<%= config.git.path_gitconfig_system %>'
	},
	gitignore: {
		dest: '<%= config.git.path_gitignore %>',
		relativeSrc: '<%= config.git.path_gitignore_system %>'
	},
	osx: {
		dest: '<%= config.osx.path_osx %>',
		relativeSrc: '<%= config.osx.path_osx_system %>'
	},
	zsh: {
		dest: '<%= config.zsh.path_zshrc %>',
		relativeSrc: '<%= config.zsh.path_zshrc_system %>'
	},
	sublime_install_packages: {
		dest: '<%= config.sublime_text.path_sublime_install_packages %>',
		relativeSrc: '<%= config.sublime_text.path_sublime_system %>'
	},
	sublime_packages: {
		dest: '<%= config.sublime_text.path_sublime_packages %>',
		relativeSrc: '<%= config.sublime_text.path_sublime_system %>'
	}
};
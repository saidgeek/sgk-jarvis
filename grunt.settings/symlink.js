'use strict';

module.exports = {

	gitconfig: {
		relativeSrc: '<%= config.git.path_gitconfig %>',
		dest: '<%= config.git.path_gitconfig_system %>'
	},
	gitignore: {
		relativeSrc: '<%= config.git.path_gitignore %>',
		dest: '<%= config.git.path_gitignore_system %>'
	},
	osx: {
		relativeSrc: '<%= config.osx.path_osx %>',
		dest: '<%= config.osx.path_osx_system %>'
	},
	zsh: {
		relativeSrc: '<%= config.zsh.path_zshrc %>',
		dest: '<%= config.zsh.path_zshrc_system %>'
	},
	sublime_install_packages: {
		relativeSrc: '<%= config.sublime_text.path_sublime_install_packages %>',
		dest: '<%= config.sublime_text.path_sublime_install_packages_system %>'
	},
	sublime_packages: {
		relativeSrc: '<%= config.sublime_text.path_sublime_packages %>',
		dest: '<%= config.sublime_text.path_sublime_packages_system %>'
	}
};

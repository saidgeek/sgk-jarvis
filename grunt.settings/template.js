'use strict';

module.exports = {
	git: {
		options: {
			data: '<%= config %>'
		},
		files: {
			'<%= config.git.path_gitconfig %>': ['templates/.gitconfig'],
			'<%= config.git.path_gitignore %>': ['templates/.gitignore_global']
		}
	},
	osx: {
		options: {
			data: '<%= config %>'
		},
		files: {
			'<%= config.osx.path_osx %>': ['templates/.osx']
		}
	},
	zsh: {
		options: {
			data: '<%= config %>'
		},
		files: {
			'<%= config.zsh.path_zshrc %>': ['templates/.zshrc']
		}
	}
};
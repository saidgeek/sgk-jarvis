'use strict';

module.exports = {

	oh_my_zsh: {
		options: {
			directory: '<%= config.zsh.path_oh_my_zsh %>',
			repository: 'https://github.com/robbyrussell/oh-my-zsh.git'
		}
	},
	nvm: {
		options: {
			directory: '<%= config.nvm.path_nvm %>',
			repository: 'https://github.com/creationix/nvm.git'
		}
	},
	solarized_theme: {
		options: {
			directory: '<%= config.themes.path_solarized %>',
			repository: 'https://github.com/altercation/solarized.git'
		}
	},
	alfred_solarized: {
		options: {
			directory: '<%= config.themes.path_alfred_solarized %>',
			repository: 'https://github.com/imkmf/alfred-solarized.git'
		}
	},
	sublime_dotfiles: {
		directory: '<%= config.sublime_text.path_sublime_dotfiles %>',
		repository: 'https://github.com/saidgeek/sublime-dotfiles.git'
	}

};
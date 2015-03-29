'use strict'

userhome = require 'userhome'

module.exports =
	path_dotfiles: userhome '.dotfiles'
	git:
		path_gitconfig: '<%= config.path_dotfiles %>/.gitconfig'
		path_gitconfig_system: userhome '.gitconfig'
		path_gitignore: '<%= config.path_dotfiles %>/.gitignore_global'
		path_gitignore_system: userhome '.gitignore_global'
	osx:
		path: '<%= config.path_dotfiles %>/.osx'
	nvm:
		git: 'https://github.com/creationix/nvm.git'
		path_clone: '<%= config.path_dotfiles %>/.nvm'
	zsh:
		oh_my_zsh:
			git: 'https://github.com/robbyrussell/oh-my-zsh.git'
			path_clone: '<%= config.path_dotfiles %>/.oh-my-zsh'
		path_zshrc: '<%= config.path_dotfiles %>/.zshrc'
		path_zshrc_system: userhome '.zshrc'
	sublime_text:
		git: 'https://github.com/saidgeek/sublime-dotfiles.git'
		path_clone: '<%= config.path_dotfiles %>/.sublime-dotfiles'
		path_sublime_install_packages: '<%= config.path_dotfiles %>/.sublime-dotfiles/Installed Packages'
		path_sublime_packages: '<%= config.path_dotfiles %>/.sublime-dotfiles/Packages'
		path_sublime_system: userhome 'Library/Application Support/Sublime Text 3/Installed Packages'
		path_sublime_install_packages_system: userhome 'Library/Application Support/Sublime Text 3/Installed Packages'
		path_sublime_packages_system: userhome 'Library/Application Support/Sublime Text 3/Packages'
	themes:
		solaride:
			git: 'https://github.com/altercation/solarized.git'
			path_clone: '<%= config.path_dotfiles %>/.solarized_theme'
		alfred_solarized:
			git: 'https://github.com/imkmf/alfred-solarized.git'
			path_clone: '<%= config.path_dotfiles %>/.solarized_alfred_theme'

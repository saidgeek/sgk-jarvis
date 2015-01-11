'use strict';

module.exports = {

	options: {
		stdout: true,
		stderr: true
	},

	osx: {
		command: 'source <%= config.osx.path_osx_system %>'
	},
	zsh: {
		command: [
			'chsh -s /bin/zsh',
			'source <%= config.zsh.path_zshrc_system %>'
		].join('&&')
	},

	brew: {
		command: 'ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"'
	},

	brew_cask: {
		command: [
			'brew install caskroom/cask/brew-cask',
			'brew tap caskroom/versions',
			'brew cleanup'
		].join('&&')
	},

	brew_mongodb: {
		command: 'brew install mongodb'
	},

	cask_alfred: {
		command: 'brew cask install --appdir=/Applications alfred'
	},
	cask_google_chrome: {
		command: 'brew cask install --appdir=/Applications google-chrome'
	},
	cask_sublime_text3: {
		command: 'brew cask install --appdir=/Applications sublime-text3'
	},
	cask_totalterminal: {
		command: 'brew cask install --appdir=/Applications totalterminal'
	},
	cask_github: {
		command: 'brew cask install --appdir=/Applications github'
	},
	cask_mou: {
		command: 'brew cask install --appdir=/Applications mou'
	},
	cask_mindnode_pro: {
		command: 'brew cask install --appdir=/Applications mindnode-pro'
	},
	cask_caffeine: {
		command: 'brew cask install --appdir=/Applications caffeine'
	},
	cask_robomongo: {
		command: 'brew cask install --appdir=/Applications robomongo'
	},
	cask_iterm2: {
		command: 'brew cask install --appdir=/Applications iterm2'
	},

	brew_cask_cleanup: {
		command: [
			'brew cleanup',
			'brew cask cleanup'
		].join('&&')
	},

	theme_alfred: {
		command: [
		'[ -d "/Applications/Alfred\ 2.app" ]',
		'open <%= config.themes.path_alfred_solarized %>/Solarized\ \(Dark\).alfredtheme || echo "Alfred App is not installed"'
		].join('&&')
	},

	theme_terminal: {
		command: 'open <%= config.themes.path_solarized %>/.solarized_theme/osx-terminal.app-colors-solarized/Solarized\ Dark\ ansi.terminal'
	},
	theme_iterm: {
		command: 'open <%= config.themes.path_solarized %>/.solarized_theme/iterm2-colors-solarized/Solarized\ Dark.itermcolors'
	}


};

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
		command: 'chsh - /bin/zsh'
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
		command: 'brew cask --appdir=/Applications alfred'
	},
	cask_google_chrome: {
		command: 'brew cask --appdir=/Applications google-chrome'
	},
	cask_sublime_text3: {
		command: 'brew cask --appdir=/Applications sublime-text3'
	},
	cask_totalterminal: {
		command: 'brew cask --appdir=/Applications totalterminal'
	},
	cask_github: {
		command: 'brew cask --appdir=/Applications github'
	},
	cask_mou: {
		command: 'brew cask --appdir=/Applications mou'
	},
	cask_mindnode_pro: {
		command: 'brew cask --appdir=/Applications mindnode-pro'
	},
	cask_caffeine: {
		command: 'brew cask --appdir=/Applications caffeine'
	},
	cask_robomongo: {
		command: 'brew cask --appdir=/Applications robomongo'
	},
	cask_iterm2: {
		command: 'brew cask --appdir=/Applications iterm2'
	},

	brew_cask_cleanup: {
		command: [
			'brew cleanup',
			'brew cask cleanup'
		].join('&&')
	},

	theme_alfred: {
		command: [
		'[ -d "/Applications/Alfred 2.app" ]',
		'open <%= config.themes.path_alfred_solarized %>/Solarized (Dark).alfredtheme || echo "Alfred App is not installed"'
		].join('&&')
	},

	theme_terminal: {
		command: 'open <%= config.themes.path_solarized %>/.solarized_theme/osx-terminal.app-colors-solarized/Solarized Dark ansi.terminal'
	}


};
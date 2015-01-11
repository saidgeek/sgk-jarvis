'use strict';

//-- rewuire ----------------------------------------
var path = require('path'),
		fs = require('fs'),
		colors = require('colors'),
		userhome = require('userhome'),

		prompt_settings = require('./grunt.settings/prompt'),
		template_settings = require('./grunt.settings/template'),
		git_clone_settings = require('./grunt.settings/git.clone'),
		symlink_settings = require('./grunt.settings/symlink'),
		exec_settings = require('./grunt.settings/exec'),

		PATH_DOTFILES = userhome('.dotfiles');


module.exports = function(grunt) {

	grunt.initConfig({

		path_dotfiles: PATH_DOTFILES,

		// Bumpof the pkg
		bump: {

			options: {
        commit: true,
        commitFiles: ['package.json'],
        commitMessage: 'Release v%VERSION%',
        createTag: true,
        files: ['package.json'],
        push: true,
        pushTo: 'origin',
        tagMessage: 'Version %VERSION%',
        tagName: 'v%VERSION%'
      }

		},

		config: {
			git: {
				path_gitconfig: '<%= path_dotfiles %>/.gitconfig',
				path_gitconfig_system: userhome('.gitconfig'),
				path_gitignore: '<%= path_dotfiles %>/.gitignore_global',
				path_gitignore_system: userhome('.gitignore_global')
			},
			osx: {
				path_osx: '<%= path_dotfiles %>/.osx',
				path_osx_system: userhome('.osx')
			},
			themes: {
				path_solarized: '<%= path_dotfiles %>/.solarized_theme',
				path_alfred_solarized: '<%= path_dotfiles %>/.solarized_alfred_theme'
			},
			nvm: {
				path_nvm: '<%= path_dotfiles %>/.nvm'
			},
			zsh: {
				path_oh_my_zsh: '<%= path_dotfiles %>/.oh-my-zsh',
				path_zshrc: '<%= path_dotfiles %>/.zshrc',
				path_zshrc_system: userhome('.zshrc')
			},
			sublime_text: {
				path_sublime_dotfiles: '<%= path_dotfiles %>/.sublime-dotfiles',
				path_sublime_install_packages: '<%= path_dotfiles %>/.sublime-dotfiles/Installed Packages',
				path_sublime_packages: '<%= path_dotfiles %>/.sublime-dotfiles/Packages',
				path_sublime_system: userhome('Library/Application Support/Sublime Text 3/Installed Packages'),
				path_sublime_install_packages_system: userhome('Library/Application Support/Sublime Text 3/Installed Packages'),
				path_sublime_packages_system: userhome('Library/Application Support/Sublime Text 3/Packages')
			}
		},

		/**
		 * Questions pre install setup
		 */
		prompt: {
			config: prompt_settings
		},

		/**
		 * Clean dotfiles folder
		 */
		clean: {
			all: {
        options: {
            force: true
        },
        src: ['<%= path_dotfiles %>']
      }
		},
		mkdir: {
			all: {
				options: {
					create: [
						userhome('dev'),
						userhome('Library/Application Support/Sublime Text 3')
					]
				}
			}
		},
		/**
		 * Make files of dotfiles
		 */
		template: template_settings,
		/**
		 * Clone repos required
		 */
		gitclone: git_clone_settings,
		/**
		 * link to config files
		 */
		symlink: symlink_settings,
		/**
		 * Exec shells
		 */
		exec: exec_settings

	});

	/**
	 * Write banner in console
	 */
	grunt.task.registerTask('banner', function() {
			grunt.log.writeln(grunt.file.read('templates/.banner').green);
	});

	/**
	 * Check if dotfiles directory exists.
	 */
	grunt.task.registerTask('setup', function(args) {

		if (typeof args !== 'undefined') {
			PATH_DOTFILES = userhome(args);
			grunt.config.set('path_dotfiles', userhome(args));
		};

		grunt.task.run(['banner', 'check_setup'])
		
	});

	grunt.task.registerTask('check_setup', function() {

		try {
			fs.statSync(PATH_DOTFILES).isDirectory();
			grunt.log.writeln('Setup already installed.'.red);
		} catch (err) {
			grunt.log.writeln('Setup installed...'.green);
			grunt.task.run('install_setup');
		};

	});

	grunt.task.registerTask('shell:install', function () {
		
		var apps = grunt.config.get('config').apps;
		var tasks = [];

		tasks.push('exec:brew_cask');

		for (var i = 0; i < apps.length; i++) {
			if (apps[i] !== 'mongodb') {
				tasks.push('exec:cask_' + apps[i].replace('-', '_'));
			} else {
				tasks.push('exec:brew_' + apps[i]);
			}
		};

		tasks.push('exec:brew_cask_cleanup');
		tasks.push('exec:theme_terminal');
		tasks.push('exec:theme_iterm');
		tasks.push('exec:zsh');
		tasks.push('exec:osx');

		grunt.task.run(tasks);

	});

	/**
	 * Grunt libraries required
	 */
	grunt.loadNpmTasks('grunt-bump')
	grunt.loadNpmTasks('grunt-prompt')
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-template');
	grunt.loadNpmTasks('grunt-git');
	grunt.loadNpmTasks('grunt-symlink');
	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-mkdir');

	grunt.registerTask('test', ['prompt', 'shell:install']);

	/**
	 * Tasks registered
	 */
	grunt.registerTask('install_setup',['prompt', 'template', 'gitclone', 'mkdir', 'symlink', 'shell:install']);


}

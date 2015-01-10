'use strict';

var spawn = require('child_process').spawn,
		which = require('which').sync;

var Dotfiles = function (options, cwd, env) {

	if (options.length <= 0) this.help();

	this.opts = {
		args: options,
		fun: options[0].toLowerCase(),
		funOpts: options.splice(1),
		cwd: cwd,
		env: env
	};

};

Dotfiles.prototype.exec = function () {
	switch (this.opts.fun) {
		case 'setup':
			this.setup();
			break;
		default:
			this.help();
			break;
	}
}

Dotfiles.prototype.setup = function () {

	if (this.opts.args.length > 0) {
		spawn(which('grunt'), this.opts.args, {
			cwd: this.opts.cwd,
			env: this.opts.env,
			stdio: 'inherit'
		});
	} else {
		this.help();
	};

};

Dotfiles.prototype.help = function () {
	console.log('Dotfiles help!');
};

module.exports = Dotfiles;
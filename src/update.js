'use strict';

var updateNotifier = require('update-notifier'),
		pkg = require('../package.json');

var Update = function () {
	this.notifier = updateNotifier({
		packageName: pkg.name,
		packageVersion: pkg.version
	});
}

Update.prototype.exec = function () {
	
	if (this.notifier.update) {
		this.notifier.notify();
	}
	
}

module.exports = Update;
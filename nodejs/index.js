var model = require('../build/auditing_types.js');

var appIdToName = {};
for (var key in model.App) {
	if (model.App.hasOwnProperty(key)) {
		appIdToName[model.App[key]] = key;
	}
}

model.Notification.prototype.getAppName = function () {
	return appIdToName[this.app];
};

module.exports = model;

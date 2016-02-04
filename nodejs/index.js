var model = require('../build/auditing_types.js');

var appIdToName = {};
for (var key in model.Apps) {
	if (model.Apps.hasOwnProperty(key)) {
		appIdToName[model.Apps[key]] = key;
	}
}

model.Notification.getAppName = function () {
	return appIdToName[this.app];
};

module.exports = model;

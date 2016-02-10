// APPENDED TO AUTO_GENERATED FILE

var appIdToName = {};
for (var key in model.App) {
	if (model.App.hasOwnProperty(key)) {
		appIdToName[model.App[key]] = key;
	}
}

Notification.prototype.getAppName = function () {
	return appIdToName[this.app];
};

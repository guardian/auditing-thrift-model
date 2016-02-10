// APPENDED TO AUTO_GENERATED FILE

var appIdToName = {};
for (var key in ttypes.App) {
	if (ttypes.App.hasOwnProperty(key)) {
		appIdToName[ttypes.App[key]] = key;
	}
}

Notification.prototype.getAppName = function () {
	return appIdToName[this.app];
};

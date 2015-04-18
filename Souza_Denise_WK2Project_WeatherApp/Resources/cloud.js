/**
 * @author Denise Souza
 * AVF1504 Weather App 2
 */


var Cloud = require('ti.cloud');
Cloud.debug = true;

exports.appCloudLogin = function() {

	if (Ti.Network.online) {
		Cloud.Users.login({
			login : "com.souzadenise.wk2weatherapp",
			password : "12345"
		}, function(e) {
			if (e.success) {
				uiLoad.entryBuild();
				Ti.API.info("Logged in user, id = " + e.users[0].id + ", session ID = " + Cloud.sessionId);
			} else {
				Ti.API.info("Login failed.");
			}
		});
	}
};

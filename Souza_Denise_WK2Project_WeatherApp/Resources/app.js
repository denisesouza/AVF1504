/**
 * @author Denise Souza
 * AVF1504 Weather App 2
 */


var uiLoad = require("ui");
var geoLoad = require("geo");
//var loadWeatherData = require("weatherData");
var Cloud = require('ti.cloud');
Cloud.debug = true; 
 
var appCloudLogin = function() {

	if (Ti.Network.online) {
			Cloud.Users.login({
				login : "com.souzadenise.wk2weatherapp",
				password : "12345"
		}, function(e) {
			if (e.success) {
					geoLoad.geo();
					Ti.API.info("Logged in user, id = " + e.users[0].id + ", session ID = " + Cloud.sessionId);
			} else {
					Ti.API.info("Login failed.");
			}
		});
	}
};

appCloudLogin();




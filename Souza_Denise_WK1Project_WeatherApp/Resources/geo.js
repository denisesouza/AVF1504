/**
 * @author Denise Souza
 */


//check network connection, and get current location // set variable to platform name
var network = require("network").check;
exports.geo = function() {
	Ti.Geolocation.getCurrentPosition(function(e) {
		var platform = Ti.Platform.osname;
		if (platform === "iphone") { //if an iphone run geo authorization - build variables and pass into network function
			
			if (Ti.Geolocation.AUTHORIZATION_AUTHORIZED) {
				var lon = e.coords.longitude;
				var lat = e.coords.latitude;
				var url = "http://api.wunderground.com/weather/api/8ad159642a519b70/conditions/astronomy/forecast/bestfct/q/" + lat + "," + lon + ".json";
				
			} else {  //not authorized and will get below alert
				
				alert("Cannot get your current location.");
			}
				network(url); // pass into network function
			
			} else {
				//if it is an android phone it will take these and plug it into the URL and run the newtwork function
				var lon = "-71.0822085";
				var lat = "41.9604969";
				var url = "http://api.wunderground.com/weather/api/8ad159642a519b70/conditions/astronomy/forecast/bestfct/q/" + lat + "," + lon + ".json";
				
				network(url);
			}
		
	});
	
};
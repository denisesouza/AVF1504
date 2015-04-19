/**
 * @author Denise Souza
 * * AVF1504 Weather App 2
 */


loadWeather= require("weatherData").db;
var cloudSave = require("Cloud");
exports.check = function(url) {
	var xhr = Ti.Network.createHTTPClient({
		onload: function() {
			var weatherData = new loadWeather();  //delete what is in database, once new connection established
			weatherData.delete();
			
			var data = JSON.parse(this.responseText);
			console.log(data);
			//create an object from API - passthrough if htere is a connection
			var object = {
				ftemp: data.current_observation.feelslike_f,
				ctemp: data.current_observation.feelslike_c,
				city: data.current_observation.display_location.city,
				state: data.current_observation.display_location.state_name,
				wind: data.current_observation.wind_mph,
				low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
				high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
				lowC : data.forecast.simpleforecast.forecastday[0].low.celsius,
				maxWind : data.forecast.simpleforecast.forecastday[0].maxwind.mph,
				phase : data.moon_phase.phaseofMoon,
				hemisphere : data.moon_phase.hemisphere
				
			};
			console.log(object.phase, object.hemisphere);
			weatherData.create(object);
			cloudSave.cloudSave(object);
		},
		onerror: function() {
			var weatherData = new loadWeather();  //pass through dummy data if connection is not found
				if(!Ti.Network.online) {
					var object = {
						ftemp: "--",
						ctemp: "--",
						city: "--",
						state: "--",
						wind: "--",
						low: "--",
						high: "--"
				};
			//run create to build database with API properties
			weatherData.create(object);
			alert("Could not connect to network!");
			
					
			}
		}
	});
	
xhr.open("GET", url);
xhr.send();

};
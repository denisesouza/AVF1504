/**
 * @author Denise Souza
 * AVF1504 Weather App 2
 */



exports.cloudSave = function(obj) {
	Cloud.Objects.create({
		classname : 'weather',
		fields : {
			ftemp : obj.ftemp,
			ctemp : obj.ctemp,
			city: obj.city,
			state: obj.state,
			wind: obj.wind
		}
	}, function(e) {
		if (e.success) {
				var weather = e.weather[0];
				alert('Success:\n' + 'id: ' + weather.id + '\n' + 'Fahrenheit: ' + weather.ftemp + '\n' + 'Celsius: ' + weather.ctemp + '\n' + 'City: ' + weather.city + '\n' + 'State:' + weather.state + '\n' + "Wind:" + weather.wind + "mph" + '\n' + "created_at:"  + weather.created_at);
		} else {
				alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
}; 








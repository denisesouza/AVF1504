/**
 * @author Denise Souza
 */


var view = require("ui").windowView;
exports.db = function() {
	var data = Titanium.Database.open('database');
	data.execute('CREATE TABLE IF NOT EXISTS weatherData (id INTEGER PRIMARY KEY, ftemp TEXT, ctemp TEXT, city TEXT, state TEXT, wind TEXT, low TEXT, high TEXT)');
	data.close();
	
	//read the properties and run the object created through view (UI)
	this.read = function(){
		var data = Ti.Database.open('database');
		var rows = data.execute('SELECT * FROM weatherData');
			var object = {
				ftemp: rows.fieldByName('ftemp'),
				ctemp: rows.fieldByName('ctemp'),
				city: rows.fieldByName('city'),
				state: rows.fieldByName('state'),
				wind: rows.fieldByName('wind'),
				low: rows.fieldByName('low'),
				high: rows.fieldByName('high')
			};
			
		rows.close();
		data.close();
		view(object);
	};
	
	
	//create to build data from properties and run the above read to populate UI
	this.create = function(obj) {
		var data = Ti.Database.open('database');
		data.execute('INSERT INTO weatherData (ftemp, ctemp, city, state, wind, low, high) VALUES (?, ?, ?, ?, ?, ?, ?)', obj.ftemp, obj.ctemp, obj.city, obj.state, obj.wind, obj.low, obj.high);
		data.close();
		this.read(); // run a read 
		
	};
	this.delete = function(id) {
		var data = Ti.Database.open('database');
		data.execute('DELETE FROM weatherData');
		data.close();
	};
	
};

/**
 * @author Denise Souza
 * AVF1504 Weather App 2
 */


//create main window

exports.windowView = function(data) {
     	console.log (data); 
     	
    var win1 = Ti.UI.createWindow({
			backgroundImage: "background.jpg",
			fullscreen: true
	});

	var win2 = Ti.UI.createWindow({
			backgroundImage: "backgroundNight.jpg",
			fullscreen: true
	});
	
	var win3 = Ti.UI.createWindow({
			backgroundImage: "backgroundForecast.jpg",
			fullscreen: true
	});




//create current weather window 
var current = Ti.UI.createView({
	 //layout: "vertical",
     top: "2%",
     bottom: "50%",
     left: "2%",
     right: "2%",
     borderRadius: "8dp",
     borderColor: "#fff",
     backgroundColor: "#80000000"
});


var currentLabel = Ti.UI.createLabel({
		text : "Current Weather",
		color : "#fff",
		top : "1%",
		font : {fontSize : "24dp"}
});


var ftemp = Ti.UI.createLabel({
	 text: data.ftemp + "°",  //creating the little degree symbol keyboard shortcut option+shift+8
     bottom: "50%", 
     left: "10%", 
     color: "#fff",
     font: {fontSize: "96dp"}
});

	

var ctemp = Ti.UI.createLabel({
	 text: data.ctemp + "°c", 
	 bottom: "15%",
	 left: "5%",
	 color: "#fff",
	 font: {fontSize: "40dp"}
});


var cityText = Ti.UI.createLabel({
	text: data.city,
	top: "7%",
    left: "5%", 
    color: "#fff", 
     font: {fontSize: "40dp"}
});

	

var stateText = Ti.UI.createLabel({
	text: data.state,
     color: "#fff",
     top: "18%",
     left: "5%", 
     font: {fontSize: "24dp"}
});


var windText = Ti.UI.createLabel({
	text: "Wind: " + data.wind + " mph",
	color: "#fff",
	right: "5%",
	top: "7%",
	font: {fontSize: "20dp"}
	
});

	
var lowText = Ti.UI.createLabel({
	text: "L : " + data.low + "°",
	color: "#fff",
	left: "5%",
	bottom: "2%",
	font: {fontSize: "22dp"}
	
});

var highText = Ti.UI.createLabel({
	text: "H : " + data.high + "°",
	color: "#fff",
	left: "20%",
	bottom: "2%",
	font: {fontSize: "22dp"}
	
	
});

//create projected weather window 

var projected = Ti.UI.createView({
		//layout: "vertical",
		top : "2%",
		bottom : "50%",
		left : "2%",
		right : "2%",
		borderRadius : "10dp",
		borderColor : "#fff",
		backgroundColor : "#80000000"
	});
	
var projectedLabel = Ti.UI.createLabel({
		text : "Projected Hi & Low Temp",
		color : "#fff",
		top : "1%",
		font : {fontSize : "24dp"}
		
	});
	
var projectedTemp = Ti.UI.createLabel({
		text : "H : " + data.high + "º" +  " L : " + data.low + "º",
		color : "#fff",
		bottom : "40%",
		left: "35%",
		font : {fontSize : "44dp"}
		
	});
	
var projectedWind = Ti.UI.createLabel({
		text : "Max Wind: " + data.maxWind + " mph",
		color : "#fff",
		top : "7%",
		right : "5%",
		font : {fontSize : "20dp"}
		
	});
	
var projectedState = Ti.UI.createLabel({
		text : data.state,
		color : "#fff",
		top : "20%",
		left : "5%",
		font : {fontSize : "24dp"}
		
	});
	
var projectedCity = Ti.UI.createLabel({
		text : data.city,
		color : "#fff",
		top : "7%",
		left : "5%",
		font : {fontSize : "40dp"}
		
	});
	

//create current night weather window 

var night = Ti.UI.createView({
	//layout: "vertical",
	top : "1%",
	bottom : "58%",
	left : "2%",
	right : "2%",
	borderRadius : "10dp",
	borderColor : "#fff",
	backgroundColor: "#80000000"
});


var nightState = Ti.UI.createLabel({
	text : data.state,
	color : "#fff",
	top : "15%",
	left : "5%",
	font : {fontSize : "22dp"}
		
	});
	
	var nightCity = Ti.UI.createLabel({
		text : data.city,
		color : "#fff",
		top : "7%",
		left : "5%",
		font : {fontSize : "28dp"}
		
	});
	
	var nightHiLo = Ti.UI.createLabel({
		text : "H : " + data.high + "º" + " L : " + data.low + "º",
		color : "#fff",
		bottom : "2%",
		left: "5%",
		font : {fontSize : "44dp"}
		
	});
	
	var nightTemp = Ti.UI.createLabel({
		text : data.low + "º",
		color : "#fff",
		bottom : "12%",
		left : "5%",
		font : {fontSize : "92dp"}
		
	});
	
	
	var nightCel = Ti.UI.createLabel({
		text : data.lowC + " ºc",
		color : "#fff",
		bottom : "2%",
		left : "5%",
		font : {fontSize : "28dp"}
		
	});
	
	
	var nightLabel = Ti.UI.createLabel({
		text : "Tonight's Weather",
		color : "#fff",
		top : "1%",
		font : {fontSize : "24dp"},
		
	});
	
	
	
	var nightPhase = Ti.UI.createLabel({
		text : "Moon Phase: " + data.phase + "/" + data.hemisphere,
		color : "#fff",
		top : "10%",
		right : "10%",
		font : {fontSize : "20dp"}
		
	});



win1.addEventListener('swipe', function(e) {
		console.log(e.direction);
		if (e.direction == "left") {
			win2.open();
		} else if (e.direction === "right") {
				alert("Can't Seem to get my 3rd window to open");
		} else if (e.direction === "up") {
				
			
		} else {

		}
	});
	
win2.addEventListener('swipe', function(e) {
		if (e.direction == "down") {
				win3.open();	
		} else if (e.direction == "left") {
			win3.open();
		}
	});
	
win3.addEventListener('swipe', function(e) {
		if (e.direction == "right") {
			win2.close();
		};
	});



night.add(nightTemp);
night.add(nightLabel);
night.add(nightCity);
night.add(nightState);
night.add(nightPhase);
night.add(nightHiLo);
current.add(ftemp);
current.add(ctemp);
current.add(cityText);
current.add(stateText);
current.add(windText);
current.add(ftemp);
current.add(currentLabel);
current.add(lowText);
current.add(highText);
projected.add(projectedTemp);
projected.add(projectedCity);
projected.add(projectedState);
projected.add(projectedLabel);
win3.add(projected);
win2.add(night);
win1.add(current);
win1.open();


};



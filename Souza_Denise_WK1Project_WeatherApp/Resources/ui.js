/**
 * @author Denise Souza
 */

//create main window


 var win = Ti.UI.createWindow({
	backgroundImage: "background.jpg",
		fullscreen: true
	});



//Create button and label to allow location and to get current weather
var button = Ti.UI.createButton({
	title: "Allow your current location to access current local weather?",
	color: "#fff",
	bottom: "50%",
	borderRadius: "8dp",
	height: "15%",
	width: "90%",
	backgroundColor: "#000"
});

var title = Ti.UI.createLabel({
	text: "",
	color: "#fff",
	bottom: "5%",
	left: "5%",
	font: {fontSize: "22dp", fontFamily: "Arial"}
});

win.add(button);
win.open();


exports.button = button;



exports.windowView = function(data) {
     console.log (data); 
    var win1 = Ti.UI.createWindow({
	backgroundImage: "background.jpg",
		fullscreen: true
	});


//create main view
var current = Ti.UI.createView({
     top: "2%",
     bottom: "50%",
     left: "2%",
     right: "2%",
     borderRadius: "8dp",
     borderColor: "#fff"
});


var ftemp = Ti.UI.createLabel({
	 text: data.ftemp + "°",  //creating the little degree symbol keyboard shortcut option+shift+8
     bottom: "50%", 
     left: "5%", 
     color: "#fff",
     font: {fontSize: "96dp"}
});

	

var ctemp = Ti.UI.createLabel({
	 text: data.ctemp + "°c", 
	 bottom: "10%",
	 left: "5%",
	 color: "#fff",
	 font: {fontSize: "30dp"}
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
	font: {fontSize: "18dp"}
	
});

var lowText = Ti.UI.createLabel({
	text: "L : " + data.low + "°",
	color: "#fff",
	left: "5%",
	bottom: "2%",
	font: {fontSize: "18dp"}
	
});

var highText = Ti.UI.createLabel({
	text: "H : " + data.high + "°",
	color: "#fff",
	left: "20%",
	bottom: "2%",
	font: {fontSize: "18dp"}
	
	
});



current.add(ftemp);
current.add(ctemp);
current.add(cityText);
current.add(stateText);
current.add(windText);
current.add(lowText);
current.add(highText);
win1.add(current);
win1.open();


};


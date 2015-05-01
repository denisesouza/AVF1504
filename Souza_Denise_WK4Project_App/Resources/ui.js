/**
 * @author Denise Souza
 * AVF1504 Week 4 App 
 */


var networkLoad = require("network");
var osname = Ti.Platform.osname;

exports.entryBuild = function(e) {
	var data = new dataLoad();
	// create array for genre types
	var genreArray = [{
		title : "HipHop"
	}, {
		title : "Covers"
	}, {
		title : "Rap"
	}, {
		title : "R&B"
	}, {
		title : "Pop"
	}, {
		title : "Rock"
	}, {
		title : "House"
	}, {
		title : "Jazz"
	}, {
		title : "Blues"
	}, {
		title : "Folk"
	}, {
		title : "Country"
	}];
	
	//List of my current favorite artist
	
	
	var artistArray = [{
		title : "Celine Dion"
	}, {
		title : "Maroon 5"
	}, {
		title : "Sam Smith"
	}, {
		title : "Ed Sheeran"
	}, {
		title : "Eminem"
	}, {
		title : "Common"
	}, {
		title : "2 Chainz"
	},{
		title : "Calvin Harris"
	},{
		title : "John Legend"
	},];
	
	
	//create main window 
	var tableWin = Ti.UI.createWindow({
		backgroundColor : "#000",
		fullscreen : true
	});
	//Add Search Input Fields
	var searchField = Ti.UI.createTextField({
		top: "30%",
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color : '#336699',
		width : "45%",
		height : "5%",
		hintText: "Enter a artist, genre or keyword to begin search"
	});
	//create buttons
	var search = Ti.UI.createButton({
		top: "35%",
		title: "Search",
		width: "45%",
		//height: "4%",
		color: "#000",
		font: {
			fontSize: "24dp"
		},
		backgroundColor: "#ff5600"
	});
	var listen = Ti.UI.createButton({
		title : "Play all Favorites",
		font : {
			fontSize : "26dp"
		},
		top : "50%",
		width : "50%",
		//height : "5%",
		color : "#ff5600",
		borderColor: "#ff5600"
	});
	var genre = Ti.UI.createLabel({
		text: "GENRES:",
		bottom : "32%",
		font: {
			fontSize: "18dp"
		},
		left: "2%",
		color: "#ff5600"
	});
	var artists = Ti.UI.createLabel({
		text: "ARTISTS:",
		bottom : "32%",
		font: {
			fontSize: "18dp"
		},
		left: "51%",
		color: "#ff5600"
	});
	
	var titleLogo = Ti.UI.createImageView({
		height: "20%",
		top: "3%",
		image: "images/soundcloud_main.png"
	});
	
	//create table for genre and artist
	var table = Ti.UI.createTableView({
		height: "30%",
		bottom: "1%",
		right: "51%",
		left: "2%",
		backgroundColor : 'white',
		rowHeight: 30,
		seperatorColor: "transparent",
		data: genreArray
	});
	
	//need to figure out how to get this to auto populate or be a text field to enter favorites then search - still cant' get it to work'
	
	
	var tableTwo = Ti.UI.createTableView({
		height: "30%",
		bottom: "1%",
		left: "51%",
		right: "2%",
		backgroundColor : 'white',
		rowHeight: 30,
		seperatorColor: "transparent",
		data: artistArray
	});
		
	
	var url = "";
	tableWin.add(artists);
	tableWin.add(genre);
	tableWin.add(searchField);
	tableWin.add(search);
	tableWin.add(listen);
	tableWin.add(titleLogo);
	tableWin.add(tableTwo);
	tableWin.add(table);
	tableWin.open();

	listen.addEventListener('click', function(e) {
		data.read();
	});
	search.addEventListener('click', function(e) {
		if (searchField.value == "") {
			alert("Please enter a value to continue!");
		} else {
			url = "http://api.soundcloud.com/tracks.json?&client_id=cc7f901025ad59c9e06ea0f140fd6e58&genres=" + searchField.value;
			networkLoad.netCheck(url);
			tableWin.close();
			
			
		}
		
	});
	table.addEventListener('click', function(e) {
		url = "http://api.soundcloud.com/tracks.json?&client_id=cc7f901025ad59c9e06ea0f140fd6e58&genres=" + e.source.title;
		networkLoad.netCheck(url);
		tableWin.close();
	});
	tableTwo.addEventListener('click', function(e) {
		url = "http://api.soundcloud.com/tracks.json?&client_id=cc7f901025ad59c9e06ea0f140fd6e58&genres=" + e.source.title;
		networkLoad.netCheck(url);
		tableWin.close();
	});
	

};
exports.playlistBuild = function(musicList) {
	var data = new dataLoad();
	var slideLeft = Titanium.UI.createAnimation();
    	slideLeft.left = 0;     
    	slideLeft.duration = 300;
	
	var index = 0;
	var musicArray = musicList;
	var length = musicArray.length - 1;
	var audioWin = Ti.UI.createWindow({
		backgroundColor : "#000",
		fullscreen : true
	});
	
	
	
	//creating audio Player
	var player = Ti.Media.createAudioPlayer({
		url : musicArray[index].stream,
		allowBackground : true,
		preload: true
	});
	
	//need to add fast forward rewind here
	var progress = Ti.UI.createProgressBar({
		top : "66%",
		width : "90%",
		height : '40dp',
		min : 0,
		max : (musicArray[index].duration / 1000),
		value : 0,
		tintColor : '#FF6600',
	});
	
	var pausePlay = Ti.UI.createButton({
		bottom : "9%",
		backgroundImage : "images/pause1.png"
	});
	
	var back = Ti.UI.createButton({
		bottom : "10%",
		left : "12%",
		backgroundImage : "images/back1.png"
	});
	
	var returnButton = Ti.UI.createButton({
		top : "1%",
		//width : 100, 
		left : "2%",
		backgroundImage: "images/return_arrow.png"
	});
	var favorites = Ti.UI.createButton({
		title : "ADD TO FAVORITES",
		font : {
			fontSize : "22dp"
		},
		top : "71%",
		//width : "30%",
		height : "5%",
		color : "#FF6600",
	});
	var next = Ti.UI.createButton({
		bottom : "10%",
		right : "12%",
		backgroundImage : "images/next1.png"
	});
	
	var volume = Ti.UI.createSlider({
		bottom : "5%",
		min : 0,
		max : 100,
		width : '65%',
		value : 80,
		tintColor: "#FF6600",
		
	});
	var artwork = Ti.UI.createImageView({
		height : 420,
		width : 420,
		top : "10%",
		image : musicArray[index].artwork
	});
	
	console.log(artwork.image);
	console.log(musicArray[index].artwork);
	
	var title = Ti.UI.createLabel({
		text : musicArray[index].title,
		font : {
			fontFamily : "Roboto",
			fontSize : "30dp"
		},
		color : "#fff",
		backgroundColor : "#000",
		top : "55%",
	});
	var userName = Ti.UI.createLabel({
		text :musicArray[index].user,
		font : {
			fontFamily : "Roboto",
			fontSize : "20dp"
		},
		color : "#fff",
		backgroundColor : "#000",
		top : "63%",
	});
	
	player.addEventListener('progress', function(e) {
		progress.value = Math.round(e.progress / 1000);
	});
	
	volume.addEventListener('change', function(e){
		player.volume = (e.value/100);
		
	});
	pausePlay.addEventListener('click', function() {
		if (player.paused) {
			pausePlay.backgroundImage = "images/pause1.png";
			player.play();
		} else if (player.playing) {
			pausePlay.backgroundImage = "images/play1.png";
			player.pause();
		}

	});
	next.addEventListener('click', function(e) {
		if (index >= length) {
			alert("Add more songs to playlist!");
		} else {
			if (player.playing) {
				if (osname == "android") {
					player.release();
				} else {
					player.stop();
				};

			} else if (player.paused) {
				if (osname == "android") {
					player.release();
				} else {
					
					pausePlay.backgroundImage = "images/pause1.png";
					player.stop();
				};

			}
		};
	});
	
	
	back.addEventListener('click', function(e) {
		if (index === 0) {
			back.enabled = false;
		} else if (player.playing) {
			index = index - 2;
			if (osname == "android") {
				player.release();
			} else {
				player.stop();
			};

		} else if (player.paused) {
			index = index - 2;
			if (osname == "android") {
					player.release();
			} else {
					pausePlay.backgroundImage = "images/pause1.png";
					player.stop();
			};
		}

	});

	player.addEventListener('change', function(e) {
		Ti.API.info('State: ' + e.description + ' (' + e.state + ')');
		if (index !== 0) {
			back.enabled = true;
		}
	});
	favorites.addEventListener('click', function(e) {
		data.create(musicArray[index]);
		cloudLoad.cloudSave(musicArray[index]);
		alert(musicArray[index].title + "\nHas been added to your favorites!");
	});

	player.addEventListener('change', function(e) {
		console.log(length, index);
		if (index > length && e.state == 0) {
			alert("End of playlist! Continue or exit!");
		} else {
			if (e.state === 7 && index >= 0 && index < length) {

				console.log("SONG COMPLETED!!!");
				if (osname == "android") {
					player.release();
				} else {
					player.stop();
				};
				index = index + 1;
				player.url = musicArray[index].stream;
				artwork.image = musicArray[index].artwork;
				title.text = musicArray[index].title;
				userName.text = musicArray[index].user;
				audioWin.remove(artwork);
				audioWin.remove(title);
				audioWin.remove(userName);
				audioWin.add(userName);
				audioWin.add(title);
				audioWin.add(artwork);
				console.log(musicArray[index].artwork);
				player.play();
			} else if (e.state === 7 && index <= 0) {
				if (osname == "android") {
					player.release();
				} else {
					player.stop();
				};
				index = 0;
				player.url = musicArray[index].stream;
				artwork.image = musicArray[index].artwork;
				title.text = musicArray[index].title;
				userName.text = musicArray[index].user;
				audioWin.remove(artwork);
				audioWin.remove(title);
				audioWin.remove(userName);
				audioWin.add(userName);
				audioWin.add(title);
				audioWin.add(artwork);
				player.play();
			}
		};
	});
	returnButton.addEventListener('click', function(e) {
		if (osname == "android") {
			player.release();
		} else if (player.playing) {;
			player.pause();
		}
		;
		audioWin.close();
		uiLoad.entryBuild();

	});
	if (!musicArray[index].id) {
		audioWin.add(favorites);
	};
	Ti.Gesture.addEventListener('orientationchange',function(e) {
		console.log(Ti.Gesture.orientation);
		if (Ti.Gesture.orientation == 3 || Ti.Gesture.orientation == 4 ) {
			artwork.top = "8%";
			artwork.width = 350;
			artwork.height = 350;
		} else if (Ti.Gesture.orientation == 1 || Ti.Gesture.orientation == 2){		
			artwork.top = "10%";
			artwork.width = 420;
			artwork.height = 420;
		}
});
	
	audioWin.add(artwork);
	audioWin.add(volume);
	audioWin.add(progress);
	audioWin.add(userName);
	audioWin.add(title);
	audioWin.add(returnButton);
	audioWin.add(next);
	audioWin.add(back);
	audioWin.add(pausePlay);
	audioWin.add(player);
	audioWin.open(slideLeft);
	player.start();
	progress.show();
};
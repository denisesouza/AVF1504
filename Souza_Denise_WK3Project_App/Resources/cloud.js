/**
 * @author Denise Souza
 * AVF1504 Week 3 App 
 */

var Cloud = require('ti.cloud');
Cloud.debug = true;

exports.appCloudLogin = function() {

	if (Ti.Network.online) {
		Cloud.Users.login({
			login : "com.souzadenise.wk3app",
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
exports.cloudSave = function(obj) {
	Cloud.Objects.create({
		classname : 'playlist',
		fields : {
			title : obj.title,
			stream : obj.stream,
			genre : obj.genre,
			duration : obj.duration,
			artwork : obj.artwork
		}
	}, function(e) {
		if (e.success) {
			var obj = e.playlist[0];
			alert('Success:\n' + 'id: ' + obj.id + '\n' + ': ' + obj.title + '\n' + 'Stream URL: ' + obj.stream + '\n' + 'Genre: ' + obj.genre + '\n' + 'Duration:' + obj.duration + '\n' + "Album Art:" + obj.artwork + '\n' + "created_at:" + obj.created_at);
		} else {
			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
};
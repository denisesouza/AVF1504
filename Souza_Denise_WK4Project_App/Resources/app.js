/**
 * @author Denise Souza
 * AVF1504 Week 4 App 
 */

Titanium.App.idleTimerDisabled = true;
var networkLoad = require("network");
var uiLoad = require("ui");
var dataLoad = require("data").orm;
var cloudLoad = require("cloud");

cloudLoad.appCloudLogin();
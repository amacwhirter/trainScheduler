$(document).ready(function(){

//create variables to hold information


// Initialize Firebase
var config = {
    apiKey: "AIzaSyCcC4KQRs6BdV8j-a60zClyPeklA-ncm3w",
    authDomain: "trainscheduler-cbc97.firebaseapp.com",
    databaseURL: "https://trainscheduler-cbc97.firebaseio.com",
    storageBucket: "trainscheduler-cbc97.appspot.com",
    messagingSenderId: "975921946148"
};
firebase.initializeApp(config);

//create a variable to reference the database

var database = firebase.database();

//on button click, store data

$("#submit-btn").on("click", function(){
	//don't refresh the page
	event.preventDefault();

	//code in logic for storing and retrieving the most recent information.

	var name = $("#name").val().trim();
	var destination = $("#destination").val().trim();
	var time = $("#time").val().trim();
	var frequency = $("#frequency").val().trim();

	database.ref().push({
		name: name,
		destination: destination,
		time: time,
		frequency: frequency
	});
});


//create firebase "watcher"

database.ref().on("value", function(snapshot){
	console.log(snapshot.val());

	var name = snapshot.val().name;
	var destination = snapshot.val().destination;
	var time = snapshot.val().time;
	var frequency = snapshot.val().frequency;

	$("#schedule").prepend("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + time + "</td><td>" + frequency + "</td></tr>");


}, function(err) {
	console.log(err);
});

//
});




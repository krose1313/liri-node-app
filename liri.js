require('dotenv').config()

//required the Twitter and Spotify keys and tokens
var keys = require("./keys.js");

//Twitter npm install is required and request is required in order to display the returned TWitter data in my terminal
var twitter = require("twitter");
var request = require("request");

var myTweets = function () {

	var client = new twitter({
	  consumer_key: process.env.TWITTER_CONSUMER_KEY,
	  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
	  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
	});

	console.log(client);

	var userName = process.argv[3];
	if (!userName){
		userName = "katy_rose13"
	}
	 

	var params = {screen_name: 'katy_rose13'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	  	for (var i = 0; i < tweets.length; i++) {
	  		console.log(tweets[i].created_at);
	  		console.log("");
	  		console.log(tweets[i].text);
	  	}
	  }
	});

};

myTweets()
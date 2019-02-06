"use strict";

var Spotify = require('node-spotify-api');
var axios = require('axios');
var fs = require("fs");

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

function appendCmd() {
  var cmdLineInput = `node liri.js ${cmd} ${param}`;
  fs.appendFile("log.txt", `-----${cmdLineInput}-----\n`, function (err) {

    // If an error was experienced we will log it.
    if (err) {
      console.log(err);
    }

  });
}

//log file has data out of order?
function appendLogResults(data) {
  console.log(data);
  fs.appendFile("log.txt", `${data}\n`, function (err) {

    // If an error was experienced we will log it.
    if (err) {
      console.log(err);
    }

  });
}

// Spotify song search
function spotifySearch(songName) {
  var keywords = "The Sign";

  if (songName != undefined) {
    keywords = songName;
  }

  //search spotify
  spotify.search({
    type: 'track',
    query: keywords
  }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    appendLogResults(`\n--------------------- Spotify Results ----------------------------`);

    for (var i in data.tracks.items) {
      appendLogResults("\nSong Information");
      appendLogResults("------------------------");
      appendLogResults(`Song Name: ${keywords}`);
      appendLogResults(`Artist: ${data.tracks.items[i].artists[0].name}`);
      appendLogResults(`Album: ${data.tracks.items[i].album.name}`);
      appendLogResults(`Song Preview: ${data.tracks.items[i].external_urls.spotify}`);
    }
  });
}

// OMDB Search
function searchOMDB(movieName) {
  var keywords = "Mr. Nobody";

  if (movieName != undefined) {
    keywords = movieName;
  }

  axios.get(`http://www.omdbapi.com/?t=${keywords}&y=&plot=short&apikey=${keys.omdb.apiKey}`)
    .then(
      function (response) {

        appendLogResults(`\n----------------- Search OMDB ----------------------------`);
        appendLogResults(`Title: ${response.data.Title}`);
        appendLogResults(`Year: ${response.data.Year}`);
        appendLogResults(`Ratings`);

        for (var i in response.data.Ratings) {
          appendLogResults(`${response.data.Ratings[i].Source}: ${response.data.Ratings[i].Value}`);
        }
        appendLogResults(`Country: ${response.data.Country}`);
        appendLogResults(`Language: ${response.data.Language}`);
        appendLogResults(`Plot: ${response.data.Plot}`);
        appendLogResults(`Actors: ${response.data.Actors}`);
      }
    )
    .catch(function (err) {
      console.log('Error occurred: ' + err);
      // if (err.response) {
      // }
    });
}


// Get task to do from the file random.txt
function taskFromFile() {
  fs.readFile("random.txt", "utf8", function (error, data) {

    // If error then log
    if (error) {
      return console.log(error);
    }

    var fileTxt = data.split(",");


    var cmd = fileTxt[0];
    var param = fileTxt[1];

    runcmd(cmd, param);
  });
}



function runcmd(cmd, param) {
  appendCmd();
  switch (cmd) {
    case `spotify-this-song`:
      spotifySearch(param);
      break;
    case `movie-this`:
      searchOMDB(param);
      break;
    case `do-what-it-says`:
      taskFromFile(param);
      break;
    // case `concert-this`:
    //   
    //   break;
  }
}

// MAIN Program Start
var cmd = process.argv[2];
var param = process.argv[3];

runcmd(cmd, param);
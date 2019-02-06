# Liri-Node-App

### Overview

LIRI is a command line node app that takes in parameters and gives you back data.

### How To Run

Liri-node-app is a command line node application that takes in specific commands/paramaters in order to function properly. The three commands liri takes in are:

  1. `spotify-this-song`
  2. `movie-this`
  3. `do-what-it-says`

To execute a command, open up a terminal and navigate to the `liri-node-app` folder where `liri.js` is located. 

Execute: `npm install` to install the required node modules

Inside the terminal execute one of the following commands:

  * node liri spotify-this-song 'song name'
    - Searches the Spotify API for the `'song name'` you entered and outputs a formatted list of results to the terminal and appends the same results to `log.txt`

  * node liri spotify-this-song
    - Searches the Spotify API for the song `The Sign` and outputs a formatted list of results to the terminal and appends the same results to `log.txt`

  * node liri movie-this 'movie name'
    - Searches the OMDB API for the `'movie name'` you entered and outputs a formatted response, containing data about the movie you entered, to the terminal and appends the results to `log.txt`

  * node liri movie-this
    - Searches the OMDB API for the movie `Mr. Nobody` and outputs a formatted response, containing data about `Mr. Nobody`, to the terminal and appends the results to `log.txt`

  * node liri do-what-it-says
    - This command allows you to use `random.txt` to provide a command/parameter that you want liri to run. Inside `random.txt` provide a command (i.e. spotify-this-song) and a parameter (i.e. 'I want it that way') or movie-this,'Sandlot'. Then when you execute `node liri do-what-it-says` the command/parameter inside `random.txt` will be used to create output.

### Screenshots

Please look inside the folder `screenshots` to see examples of liri commands being executed and what the output looks like!

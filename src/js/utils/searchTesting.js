const dumMovies = require('../data/dumMovie'); 
const searchMovie = require('./search-movie');

const searchResult = searchMovie(dumMovies,'mario');

console.log(searchResult);
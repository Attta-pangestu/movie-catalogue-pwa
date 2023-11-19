const Fuse = require('fuse.js');


const searchMovie = (movies, query) => {
    const fuse = new Fuse(movies, {
        keys: ['title'], 
        includeScore: true,
        threshold:0.4, 
    })
    
    return fuse.search(query)
}

module.exports = searchMovie;
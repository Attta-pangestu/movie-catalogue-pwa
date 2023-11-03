import ThemovieDBSources from "../../data/theMoviedb-sources";
import UrlParser from "../../routes/urlParser";
import Config from "../../config/config";

const Detail= {
    render() {
        return `
            <div class="content">
                <h2 class="content__heading">Detail Film</h2>
                <div id="movie"></div>
            </div>
        `;
    },

    async renderMovieContent() { 
        const movieID = UrlParser.parseActiveUrlWithoutCombiner().id; 
        const detailMovie = await ThemovieDBSources.detailMoviePlaying(movieID) ; 
        this._renderDetailMovie(detailMovie) ; 
    }, 

    _renderDetailMovie(movie) {
        const movieContainer = document.querySelector('#movie') ; 
        movieContainer.innerHTML = `
            <h2 class="movie__title">${movie.original_title}</h2>
            <img class="movie__poster" src="${Config.BASE_IMAGE_URL + movie.poster_path }"/>
            <div class="movie__info">
                <h3>Movie Information</h3>
                
                <h4>Tagline</h4>
                <p>${movie.tagline}</p>

                <h4>Release Date</h4>
                <p>${movie.release_date}</p>

                <h4>Duration</h4>
                <p>${movie.runtime}</p>

                <h4>Rating</h4>
                <p>${movie.vote_average}</p>

                <div class="movie__info__overview">
                    <h3>Overview</h3>
                    <p>${movie.overview}</p>
                </div>
            </div>
        `;
    }
};

export default Detail;
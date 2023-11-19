import ThemovieDBSources from "../../data/theMoviedb-sources";
import {renderMovieListToItem} from "../templates/movieTemplate";
import FavoriteMovieIdb from "../../data/favorite-movie-db-idb";
import { renderLikedButton, renderNotLikedButton } 
from "../templates/movieTemplate";
import searchMovie from "../../utils/search-movie";

const NowPlaying = {
    _movieFetched: null,
    render() {
        return `
            <div class="content">
                <h2 class="content__heading">Now Playing In Cinema</h2>
                <div id="movies"></div>
            </div>
        `;
    }, 

    async renderMovieContent(){
        const movies = await ThemovieDBSources.getNowPlaying() ; 
        console.log(movies);
        renderMovieListToItem(movies);
        await this.movieLikeStat();
        return movies;
    }, 


    async movieLikeStat() {
        const moviesLike = await FavoriteMovieIdb.getAllMovie() ; 
        moviesLike.forEach(movie => {
            let likeContainer = document.querySelector(`#btn-${movie.id}`) ; 
            likeContainer ? (likeContainer.innerHTML = renderLikedButton()) : console.log('tidak ditemukan container like') ; 
        });
    }, 

    async UpdateLikeStatus(movieId) {
        const likeContainer = document.querySelector(`#btn-${movieId}`) ;
        const movieLiked = await FavoriteMovieIdb.getMovie(movieId) ; 
        likeContainer.innerHTML = movieLiked ? renderLikedButton() : renderNotLikedButton() ; 
        console.log(movieLiked); 
    },

    _initListener() {
        this._searchListener();
    }, 
    
    _searchListener() {
        const searchElem = document.querySelector('#search-film');
        searchElem.addEventListener('change', () => {
            const filteredMovies = searchMovie(this._movieFetched,searchElem.value);
            console.log(filteredMovies);
            this._movieItemRender(filteredMovies);
        })
    }
    
};

export default NowPlaying;
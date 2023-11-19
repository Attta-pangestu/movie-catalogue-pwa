import { renderMovieTemplate } from "../templates/movieTemplate";
import FavoriteMovieIdb from "../../data/favorite-movie-db-idb";

const LikeMovie = {
    render() {
        return `
            <div class="content">
                <h2 class="content__heading">Now Playing In Cinema</h2>
                <div id="movies"></div>
            </div>
        `;
    }, 

    async renderMovieContent() {
        const movieContainer = document.querySelector('#movies') ; 
        const movies = await FavoriteMovieIdb.getAllMovie() ;
        movies.forEach(movie => {
            movieContainer.innerHTML += renderMovieTemplate(movie) ;
            
        });
    }

}

export default LikeMovie ; 
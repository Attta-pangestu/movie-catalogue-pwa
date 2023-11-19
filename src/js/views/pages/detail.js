import ThemovieDBSources from "../../data/theMoviedb-sources";
import UrlParser from "../../routes/urlParser";
import { renderDetailMovie } from "../templates/movieTemplate";
import LikeButtonIniator from "../../utils/like-button-iniator";
const Detail= {
    render() {
        return `
            <div class="content">
                <h2 class="content__heading">Detail Film</h2>
                <div id="movie"></div>
                <div>
                    <button 
                        aria-label="unlike this movie" 
                        id="likeButtonContainer" 
                        class="like">
                    </button>
                </div>
            </div>
        `;
    },

    async renderMovieContent() { 
        const movieID = UrlParser.parseActiveUrlWithoutCombiner().id; 
        const detailMovie = await ThemovieDBSources.detailMoviePlaying(movieID) ; 

        const movieContainer = document.querySelector('#movie') ; 
        const likeButtonContainer = document.querySelector('#likeButtonContainer') ; 

        renderDetailMovie({movie : detailMovie, movieContainer : movieContainer}) ; 
        LikeButtonIniator.init({likeButtonContainer : likeButtonContainer , movie : detailMovie}) ; 
    }, 

    
};

export default Detail;
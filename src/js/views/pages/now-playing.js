import ThemovieDBSources from "../../data/theMoviedb-sources";
import Config from "../../config/config";

const NowPlaying = {
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
        const moviesContainer = document.querySelector('#movies') ;
        console.log('Berhasil melakukan fetch list now playing : ', movies) ; 
        movies.forEach(movie => {
            moviesContainer.innerHTML += this.renderMovieTemplate(movie);
        });
    }, 

    renderMovieTemplate(movie) {
        return `
            <div class="movie-item">
                <div class="movie-item__header">
                    <img class="movie-item__header__poster" 
                        alt="${movie.title}"
                        src="${Config.BASE_IMAGE_URL + movie.poster_path}"
                    />
                    <div class="movie-item__header__rating">
                        <p>⭐ <span class="movie-item__header__rating__score">${movie.vote_average}</span> </p>
                    </div>
                </div>

                <div class="movie-item__content">
                    <h3 class="movie-item__content__title"><a>${movie.title}</a></h3>
                    <p>${movie.overview}</p>
                    <a href="/#/detail/${movie.id}" class="movie-item__content__button"> Detail Film ${movie.title} </a>
                </div>
            </div>
        `;
    }, 
};

export default NowPlaying;
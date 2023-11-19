import Config from "../../config/config";

const renderMovieListToItem = (movieList) => {
    const moviesContainer = document.querySelector('#movies') ;
    moviesContainer.innerHTML = '';
    movieList.forEach( async (movie) => {
        if(movie.item) {
            moviesContainer.innerHTML += renderMovieTemplate(movie.item);
        }else{
            moviesContainer.innerHTML += renderMovieTemplate(movie);
        }
    });
}

const renderMovieTemplate = (movie) =>  {
        return `
            <div class="movie-item" >
                <div class="movie-item__header">
                    <img class="movie-item__header__poster" 
                        alt="${movie.title}"
                        src="${Config.BASE_IMAGE_URL + movie.backdrop_path}"
                    />
                    <div class="movie-item__header__rating">
                        <p>⭐ <span class="movie-item__header__rating__score">${movie.vote_average}</span> </p>
                    </div>
                </div>

                <div class="movie-item__content">
                    <h3 class="movie-item__content__title"><a>${movie.title}</a></h3>
                    <p>${movie.overview}</p>
                    <a href="/#/detail/${movie.id}" class="movie-item__content__button" > Detail Film ${movie.title} </a>
                    <button class="movie-item__like like" id="btn-${movie.id}">
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                    </button>
                </div>
                
            </div>
        `;
    }


const renderDetailMovie = ({movie, movieContainer}) =>  {
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

const renderLikedButton = () => {
    return `
        <i class="fa fa-heart" aria-hidden="true"></i>
    `;
}

const renderNotLikedButton = () => {
    return `
    <i class="fa fa-heart-o" aria-hidden="true"></i>
    `;
}

export {
    renderMovieTemplate,
    renderDetailMovie, 
    renderLikedButton, 
    renderNotLikedButton, 
    renderMovieListToItem,
} ; 
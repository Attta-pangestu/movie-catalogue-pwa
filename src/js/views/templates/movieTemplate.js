const movieTemplate =  {
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
                    <a href="/#/detail/${movie.id}" class="movie-item__content__button" > Detail Film ${movie.title} </a>
                </div>
            </div>
        `;
    }, 
}
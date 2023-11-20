import { renderMovieTemplate } from "../../templates/movieTemplate";
class FavoriteMovieView {
  renderTemplate() {
    return `
        <div class="content">
            <h2 class="content__heading">Your Liked Movie</h2>
    
            <div id="movies" class="movies">
            </div>
        </div>
      `;
  }

  _searchEventCallback(callback) {
    const searchElem = document.getElementById("search-film");
    searchElem.addEventListener("change", (e) => {
      callback(e.target.value);
    });
  }

  showFavoriteMovies(movies) {
    let html;
    console.log("Favorite Movie View : ", movies);
    if (movies) {
      html = movies.reduce((carry, movie) => {
        return carry.concat(renderMovieTemplate(movie));
      }, "");
    } else {
      html = this._getEmptyMovieTemplate();
    }
    const moviesContainer = document.getElementById("movies");
    moviesContainer.innerHTML = html;
    moviesContainer.dispatchEvent(new Event("movies:updated"));
  }

  _getEmptyMovieTemplate() {
    return `
      <div class="movie-item__not__found">
        Tidak ada film untuk ditampilkan
      </div>
    `;
  }
}

export default FavoriteMovieView;

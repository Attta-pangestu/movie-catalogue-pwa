import FavoriteMovieView from "./liked-movies/favorite-movie-view";
import FavoriteShowPresenter from "./liked-movies/favorite-movies-show-presenter";
import FavoriteMovieIdb from "../../data/favorite-movie-db-idb";

const view = new FavoriteMovieView();

const LikeMovie = {
  render() {
    return view.renderTemplate();
  },

  async renderMovieContent() {
    new FavoriteShowPresenter({
      view: view,
      favoriteMoviesIdb: FavoriteMovieIdb,
    });
  },
};

export default LikeMovie;
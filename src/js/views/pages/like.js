import FavoriteMovieView from "./liked-movies/favorite-movie-view";
import FavoriteShowPresenter from "./liked-movies/favorite-movies-show-presenter";
import FavoriteMovieIdb from "../../data/favorite-movie-db-idb";
import { searchMovies } from "../../utils/search-movie";
import FavoriteMovieSearchPresenter from "./liked-movies/favorite-movie-search-presenter";

const view = new FavoriteMovieView();

const LikeMovie = {
  render() {
    return view.renderTemplate();
  },

  async renderMovieContent() {
    const favoriteMoviesDB = await FavoriteMovieIdb.getAllMovie();
    new FavoriteShowPresenter({
      view: view,
      favoriteMoviesIdb: FavoriteMovieIdb,
    });
    new FavoriteMovieSearchPresenter({
      favoriteMoviesDB: favoriteMoviesDB,
      searchUtilities: searchMovies,
      view: view,
    });
  },
};

export default LikeMovie;

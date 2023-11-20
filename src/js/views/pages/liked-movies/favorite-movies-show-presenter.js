class FavoriteShowPresenter {
  constructor({ view, favoriteMoviesIdb }) {
    this._view = view;
    this._favoriteMoviesDb = favoriteMoviesIdb;
    this._showFavoriteMovies();
  }

  async _showFavoriteMovies() {
    const movies = await this._favoriteMoviesDb.getAllMovie();
    this._displayMovies(movies);
  }

  _displayMovies(movies) {
    this._view.showFavoriteMovies(movies);
  }
}

export default FavoriteShowPresenter;

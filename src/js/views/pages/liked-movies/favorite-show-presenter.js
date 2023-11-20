class FavoriteMovieSearchPresenter {
  constructor({ favoriteMoviesDB, view, searchUtilities }) {
    this._favoriteMoviesDB = favoriteMoviesDB;
    this._view = view;
    this._searchUtilities = searchUtilities;
    this._listenToSearchRequestByUser();
  }

  _listenToSearchRequestByUser() {
    this._view._searchEventCallback((query) => {
      this._searchMovies(query);
    });
  }

  _searchMovies(query) {
    const filtered = this._searchUtilities(query, this._favoriteMoviesDB);
    this._displayFavorite(filtered);
  }

  _displayFavorite(movies) {
    this._view.showFavoriteMovies(movies);
  }
}

export default FavoriteMovieSearchPresenter;

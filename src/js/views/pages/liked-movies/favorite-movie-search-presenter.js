class FavoriteMovieSearchPresenter {
  constructor({ favoriteMoviesDB, view, searchUtilities }) {
    this._favoriteMovies = favoriteMoviesDB;
    this._view = view;
    this._searchUtilities = searchUtilities;
    this._listenToSearchRequestByUser();
  }

  _listenToSearchRequestByUser() {
    this._view.searchEventCallback((query) => {
      this._searchMovies(query);
    });
  }

  _searchMovies(query) {
    const filtered = this._searchUtilities(query, this._favoriteMovies);
    this._displayFavoriteMovie(filtered);
  }

  _displayFavoriteMovie(movies) {
    this._view.showFavoriteMovies(movies);
  }
}

export default FavoriteMovieSearchPresenter;

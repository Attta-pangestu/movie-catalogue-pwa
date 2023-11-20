class FavoriteMovieSearchPresenter {
  constructor({ favoriteMovies, view }) {
    this._favoriteMovies = favoriteMovies;
    this._view = view;
    this._listenToSearchRequestByUser();
  }

  _listenToSearchRequestByUser() {
    this._view._searchEventCallback((query) => {
      this._searchMovies(query);
    });
  }

  _searchMovies(query) {}
}

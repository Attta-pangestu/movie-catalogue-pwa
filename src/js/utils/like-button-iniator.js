import FavoriteMovieIdb from "../data/favorite-movie-db-idb";
import {
  renderLikedButton,
  renderNotLikedButton,
} from "../views/templates/movieTemplate";

const LikeButtonIniator = {
  async init({ likeButtonContainer, movie }) {
    this._likeButtonContainer = likeButtonContainer;
    this._detailMovie = movie;
    this._likeStatus = false;
    this._renderButton();
  },

  async _renderButton() {
    // const likeElement = document.querySelector('#likedButton') ;
    await this._checkMovieStat();
    this._toggleLikeStatus();
  },
  async _checkMovieStat() {
    const movieLiked = await this._isMovieLiked();
    this._likeButtonContainer.innerHTML = movieLiked
      ? renderLikedButton()
      : renderNotLikedButton();
    console.log(movieLiked);
  },

  _toggleLikeStatus() {
    this._likeButtonContainer.addEventListener("click", async () => {
      console.log("Anda menekan tombol like");
      const movieLiked = await this._isMovieLiked();
      movieLiked ? await this._likedStat() : await this._notLikedStat();
    });
  },

  async _isMovieLiked() {
    return await FavoriteMovieIdb.getMovie(this._detailMovie.id);
  },

  async _likedStat() {
    this._likeButtonContainer.innerHTML = renderNotLikedButton();
    await console.log(
      "sedang menghapus like status",
      await FavoriteMovieIdb.deleteMovie(this._detailMovie.id)
    );
  },

  async _notLikedStat() {
    this._likeButtonContainer.innerHTML = renderLikedButton();
    await console.log(
      "sedang menambahkan like status",
      await FavoriteMovieIdb.putMovie(this._detailMovie)
    );
  },
};

export default LikeButtonIniator;

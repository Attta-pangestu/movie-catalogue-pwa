import LikeButtonIniator from "../../../src/js/utils/like-button-iniator";

const createLikeButtonPresenter = async (movie) => {
  await LikeButtonIniator.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    movie: movie,
  });
};

export default createLikeButtonPresenter;

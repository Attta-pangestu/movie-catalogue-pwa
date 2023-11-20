import createLikeButtonPresenter from "./helpers/create-like-presenter";
// import FavoriteMovieIdb from "../../src/js/data/favorite-movie-db-idb";
// import { spyOn } from "jest-mock";

describe("Test Liking Movie", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = `
            <div id="likeButtonContainer"></div>
        `;
  };

  beforeEach(() => {
    addLikeButtonContainer();
    // spyOn(FavoriteMovieIdb, "getMovie");
  });

  it("should show the like button when the movie has not been liked before", async () => {
    await createLikeButtonPresenter({ id: 1 });
    await new Promise((resolve) => setTimeout(resolve, 100));
    expect(document.querySelector(".fa-heart-o")).toBeTruthy();
  });
});

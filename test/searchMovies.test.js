import { searchMovies } from "../src/js/utils/search-movie";
import { movieData } from "./dummyData/movie-data";

describe("Tes fungsionalities searchMovies ", () => {
  // daftar film
  test("Melakukan test pencarian film dari berbagai query : ", () => {
    const query = "fury";
    expect(searchMovies(query, movieData)[0].title).toBe(
      "Shazam! Fury of the Gods"
    );
  });
});

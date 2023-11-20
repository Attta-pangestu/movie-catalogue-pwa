export const searchMovies = (query, movieList) => {
  const listFiltered = movieList.filter((movie) => {
    const loweredMovieTitle = (movie.title || "-").toLowerCase();
    const noSpaceMovieTitle = loweredMovieTitle.replace(/\s/g, "");

    const loweredQuery = (query || "-").toLowerCase();
    const noSpaceQuery = loweredQuery.replace(/\s/g, "");

    return noSpaceMovieTitle.indexOf(noSpaceQuery) !== -1;
  });
  return listFiltered;
};

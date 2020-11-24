import films from "../../mock/films";

const ALL_GENRES = `All Genres`;
const COUNT_SHOW_GENRES = 10;

const getGenres = (movies) => {
  let allGenres = [ALL_GENRES];
  for (let film of movies) {
    allGenres.push((film.genre).slice(0, COUNT_SHOW_GENRES));
  }
  return Array.from(new Set(allGenres));
};

const genres = getGenres(films);

const getFilmsByGenre = (movies, genre) => {
  return (genre === ALL_GENRES) ? movies : movies.filter((film) => film.genre === genre);
};

export {ALL_GENRES, genres, getFilmsByGenre};

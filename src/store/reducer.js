import {ActionType} from "./action";
import {ALL_GENRES, genres, getFilmsByGenre} from "../components/genres-list/genres-data";
import {extend} from "../utils";
import films from "../mock/films";

const initialState = {
  activeGenre: ALL_GENRES,
  genres,
  filteredFilms: films
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_BY_GENRE:
      return extend(state, {
        activeGenre: action.payload
      });

    case ActionType.GET_FILM_LIST_BY_GENRE:
      return extend(state, {
        filteredFilms: getFilmsByGenre(films, action.payload)
      });
  }

  return state;
};

export {reducer};

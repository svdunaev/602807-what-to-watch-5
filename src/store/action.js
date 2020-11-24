export const ActionType = {
  CHANGE_FILTER_BY_GENRE: `CHANGE_FILTER_BY_GENRE`,
  GET_FILM_LIST_BY_GENRE: `GET_FILM_LIST_BY_GENRE`,
};

export const ActionCreator = {
  changreActiveFilter: (genreForFilter) => ({
    tyle: ActionType.CHANGE_FILTER_BY_GENRE,
    payload: genreForFilter
  }),
  changeFilmList: (genreForFilter) => ({
    type: ActionType.GET_FILM_LIST_BY_GENRE,
    payload: genreForFilter
  }),
};

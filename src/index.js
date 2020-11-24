import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from "./mock/films";
import reviews from "./mock/reviews";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const PromoMovie = {
  PROMO_TITLE: `The Grand Budapest Hotel`,
  PROMO_GENRE: `Drama`,
  PROMO_DATE: 2014,
};

ReactDOM.render(
    <Provider store={store}>
      <App
        promoTitle={PromoMovie.PROMO_TITLE}
        promoGenre={PromoMovie.PROMO_GENRE}
        promoReleaseDate={PromoMovie.PROMO_DATE}
        films={films}
        reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

const PromoMovie = {
  PROMO_TITLE: `The Grand Budapest Hotel`,
  PROMO_GENRE: `Drama`,
  PROMO_DATE: 2014,
};

ReactDOM.render(
    <App
      promoTitle={PromoMovie.PROMO_TITLE}
      promoGenre={PromoMovie.PROMO_GENRE}
      promoReleaseDate={PromoMovie.PROMO_DATE}
    />,
    document.querySelector(`#root`)
);

import React from "react";
import PropTypes from "prop-types";
import MovieReviews from "../movie-reviews/movie-reviews";

const ReviewsSection = ({reviews}) => {
  const evenIndex = reviews.filter((_, index) => index % 2 !== 0);
  const oddIndex = reviews.filter((_, index) => index % 2 === 0);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        <MovieReviews reviews={oddIndex}/>
      </div>
      <div className="movie-card__reviews-col">
        <MovieReviews reviews={evenIndex}/>
      </div>
    </div>
  );
};


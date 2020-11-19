import React from "react";
import PropTypes from "prop-types";
import {filmProptypes} from "../../proptypes-validation";

const MovieOverview = ({film}) => {
  const {rating, ratingdesc, reviewsCount, description, director, cast} = film;

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingdesc}</span>
          <span className="movie-rating__count">{reviewsCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {description}
        <p className="movie-card__director">
          <strong>Director: {director}</strong>
        </p>
        <p className="movie-card__starring">
          <strong>
            Starring: {cast.join(`, `)}
          </strong>
        </p>
      </div>
    </React.Fragment>
  );
};

MovieOverview.propTypes = {
  film: PropTypes.shape(filmProptypes).isRequired,
};

export default MovieOverview;

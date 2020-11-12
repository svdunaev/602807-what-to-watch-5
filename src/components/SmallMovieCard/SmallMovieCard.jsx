import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const SmallMovieCard = (props) => {
  const {title, cover} = props;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={cover} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link to="fimls/:id" className="small-movie-card__link" href="movie-page.html">{title}</Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default SmallMovieCard;

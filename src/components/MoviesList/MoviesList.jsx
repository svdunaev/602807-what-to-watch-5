import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../SmallMovieCard/SmallMovieCard";

const MoviesList = ({films}) =>{

  return (
    <div className="catalog__movies-list">
      {films.map((film) => <SmallMovieCard key={film.id} film={film} />)}
    </div>
  );
};


MoviesList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MoviesList;

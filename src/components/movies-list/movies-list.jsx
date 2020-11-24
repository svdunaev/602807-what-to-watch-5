import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import {connect} from "react-redux";

const MoviesList = ({films}) =>{

  return (
    <div className="catalog__movies-list">
      {films.map((film) => <SmallMovieCard key={film.id} film={film} />)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  films: state.filteredFilms,
});

MoviesList.propTypes = {
  films: PropTypes.array.isRequired,
};

export {MoviesList};
export default connect(mapStateToProps)(MoviesList);

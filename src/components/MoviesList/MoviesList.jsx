import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../SmallMovieCard/SmallMovieCard";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeStatus: false,
    };
    this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
    this.onMouseOutHandler = this.onMouseOutHandler.bind(this);
  }

  onMouseOverHandler() {
    this.setState({activeStatus: true});
  }

  onMouseOutHandler() {
    this.setState({activeStatus: false});
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => (
          <SmallMovieCard title={film.title} cover={film.cover} onMouseOverHandler={this.onMouseOverHandler} onMouseOutHandler={this.onMouseOutHandler} key={`${i}-${film.title}`}/>
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MoviesList;

import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import MoviePreview from "../movie-preview/movie-preview";

export default class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);
    this.timeoutId = null;
    this.film = props.film;

    this.state = {isPlayingVideo: false};

    this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
    this.onMouseOutHandler = this.onMouseOutHandler.bind(this);
  }

  render() {
    return (
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image" onMouseOver={() => this.onMouseOverHandler()} onMouseOut={() => this.onMouseOutHandler()}>
          {this.getImageOrVideo()}
        </div>
        <h3 className="small-movie-card__title">
          <Link to="fimls/:id" className="small-movie-card__link" href="movie-page.html">{this.film.title}</Link>
        </h3>
      </article>
    );
  }
  getImageOrVideo() {
    return (
      this.state.isPlayingVideo
        ? <MoviePreview previewvideo={this.film.previewvideo} cover={this.film.cover} />
        : <img src={this.film.cover} alt={this.film.title} width="280" height="175" />
    );
  }

  onMouseOverHandler() {
    this._timeoutId = setTimeout(() => {
      this.setState({isPlayingVideo: true});
    }, 1000);
  }

  onMouseOutHandler() {
    this.setState({isPlayingVideo: false});
    clearTimeout(this._timeoutId);
    this._timeoutId = null;
  }
}

SmallMovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  film: PropTypes.object.isRequired,
};


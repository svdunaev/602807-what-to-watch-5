import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {MovieTabs, TabsList} from "./tabs-consts";
import MovieOverview from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MovieReviews from "../movie-reviews/movie-reviews";

export default class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: MovieTabs.OVERVIEW
    };

    this.handleTabClick = this.handleTabClick.bind(this);
    this.getTabContent = this.getTabContent.bind(this);
  }

  handleTabClick(tab) {
    this.setState({activeTab: tab});
  }
  getTabContent() {
    const {activeTab} = this.state;
    const {film, reviews} = this.props;

    switch (activeTab) {
      case MovieTabs.OVERVIEW:
        return <MovieOverview film={film}/>;
      case MovieTabs.DETAILS:
        return <MovieDetails film={film}/>;
      case MovieTabs.REVIEWS:
        return <MovieReviews reviews={reviews}/>;
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {TabsList.map(({type}, index) =>
              <li key={index}
                className={`movie-nav__item ` + (this.state.activeTab === type ? `movie-nav__item--active` : ``)}>
                <a href="#" className="movie-nav__link" onClick={(evt) => {
                  evt.preventDefault();
                  this.handleTabClick(type);
                }}>{type}</a>
              </li>
            )}
          </ul>
        </nav>
        {this.getTabContent()}
      </React.Fragment>
    );
  }
}

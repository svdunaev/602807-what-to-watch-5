import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import PropTypes from "prop-types";
import MoviePage from "../MoviePage/MoviePage";
import AddReview from "../AddReview/AddReview";
import MyListPage from "../MyListPage/MyListPage";
import PlayerPage from "../PlayerPage/PlayerPage";
import SignInPage from "../SignInPage/SignInPage";


const App = (props) => {
  const {promoTitle, promoGenre, promoReleaseDate} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage promoTitle={promoTitle} promoGenre={promoGenre} promoReleaseDate={promoReleaseDate} />
        </Route>
        <Route path="/login" exact>
          <SignInPage />
        </Route>
        <Route path="/mylist" exact>
          <MyListPage />
        </Route>
        <Route path="/films/:id?" exact>
          <MoviePage />
        </Route>
        <Route path="/films/:id?/review" exact>
          <AddReview />
        </Route>
        <Route path="/player/:id?" exact>
          <PlayerPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promoGenre: PropTypes.string.isRequired,
  promoTitle: PropTypes.string.isRequired,
  promoReleaseDate: PropTypes.number.isRequired,
};

export default App;


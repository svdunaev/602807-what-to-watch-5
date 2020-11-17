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
  const {films} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={({history}) => (
          <HomePage films={films} onCardClick={() => history.push(`/films/:id`)} onPlayBtnClick={() => history.push(`/player/:id`)}/>
        )} ></Route>
        <Route path="/login" exact>
          <SignInPage />
        </Route>
        <Route path="/mylist" exact>
          <MyListPage />
        </Route>
        <Route path="/films/:id?" exact render={({history}) => (<MoviePage films={films} onCardClick={() => history.push(`films/:id`)} />)}>
        </Route>
        <Route exact path="/films/:id/review" render={({match}) => {
          const film = films.find(({id}) => id === Number(match.params.id));
          return <AddReview film={film}/>;
        }}
        />
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
  films: PropTypes.array.isRequired,
};

export default App;


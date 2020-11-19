import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import HomePage from "../home-page/home-page";
import PropTypes from "prop-types";
import MoviePage from "../movie-page/movie-page";
import AddReview from "../add-review/add-review";
import MyListPage from "../my-list-page/my-list-page";
import PlayerPage from "../player-page/player-page";
import SignInPage from "../sign-in-page/sign-in-page";


const App = (props) => {
  const {films, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={({history}) => (
          <HomePage promoGenre={props.promoGenre} promoTitle={props.promoTitle} promoReleaseDate={props.promoReleaseDate} films={films} onCardClick={() => history.push(`/films/:id`)} onPlayBtnClick={() => history.push(`/player/:id`)}/>
        )} ></Route>
        <Route path="/login" exact>
          <SignInPage />
        </Route>
        <Route path="/mylist" exact>
          <MyListPage />
        </Route>
        <Route exact path="/films/:id" render={({match}) => {
          const film = films.find(({id}) => id === Number(match.params.id));
          return <MoviePage films={films} film={film} />;
        }} />
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


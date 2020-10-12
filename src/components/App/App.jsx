import React from "react";
import HomePage from "../HomePage/HomePage";
import PropTypes from "prop-types";


const App = (props) => {
  const {promoTitle, promoGenre, promoReleaseDate} = props;

  return (
    <HomePage promoTitle={promoTitle} promoGenre={promoGenre} promoReleaseDate={promoReleaseDate} />
  );
};

App.propTypes = {
  promoGenre: PropTypes.string.isRequired,
  promoTitle: PropTypes.string.isRequired,
  promoReleaseDate: PropTypes.number.isRequired,
};

export default App;


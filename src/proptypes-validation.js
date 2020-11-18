import PropTypes from "prop-types";

export const filmProptypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  cast: PropTypes.array.isRequired,
  length: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  ratingdesc: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  previewvideo: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

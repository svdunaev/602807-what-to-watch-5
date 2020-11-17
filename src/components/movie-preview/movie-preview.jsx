import React from "react";
import PropTypes from "prop-types";

const MoviePreview = ({previewvideo, cover}) => {
  return (
    <video src={previewvideo} className="player__video" poster={cover} autoPlay muted />
  );
};

MoviePreview.propTypes = {
  previewvideo: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default MoviePreview;

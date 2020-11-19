import React from "react";
import dayjs from "dayjs";

const formatDate = (date) =>
  dayjs(date).locale(`en-US`).format(`YYYY-MM-D`);

const MovieReviews = ({reviews}) => {
  return (
    reviews.map(({username, userscore, reviewtext, reviewdate}, i) => {
      const correctDate = formatDate(reviewdate);
      return (
        <div className="review" key={i}>
          <blockquote className="review__quote">
            <p className="review__text">{reviewtext}</p>

            <footer className="review__details">
              <cite className="review__author">{username}</cite>
              <time className="review__date" dateTime={correctDate}>
                {reviewdate}
              </time>
            </footer>
          </blockquote>

          <div className="review__rating">{userscore}</div>
        </div>
      );
    })
  );
};

export default MovieReviews;

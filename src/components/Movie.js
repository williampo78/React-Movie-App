import React from "react";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const setClassName = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
};

const Movie = ({ title, poster_path, overview, vote_average }) => {
  return (
    <div className="movie">
      <img src={IMG_PATH + poster_path} alt={title} />
      <div className="info">
        <h3>{title}</h3>
        <span className={setClassName(vote_average)}>{vote_average}</span>
      </div>
      <div className="overview">
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;

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
      <img
        src={
          poster_path
            ? IMG_PATH + poster_path
            : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80"
        }
        alt={title}
      />
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

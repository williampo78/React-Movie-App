import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import Header from "./components/Header";
import "./styles/style.css";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2e81a7d42c4c185ea203c1752c9e8cd3&page=1";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=2e81a7d42c4c185ea203c1752c9e8cd3&query='";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(API_URL);
  }, []);

  // const getMovies = (API) => {
  //   fetch(API)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMovies(data.results);
  //     });
  // };

  const getMovies = async (API) => {
    const fetchData = await fetch(API);
    const data = await fetchData.json();
    setMovies(data.results);
    console.log(data);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    }
  };

  const changeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Header
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        searchTerm={searchTerm}
      />
      <div className="movie-container">
        {movies && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  );
};

export default App;

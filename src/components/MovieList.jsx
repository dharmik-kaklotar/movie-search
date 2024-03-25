import React, { useEffect, useState } from "react";
import "./MovieList.css";
import Movie from "./Movie";
import { IoSearch } from "react-icons/io5";
import Loadar from "./Loadar";

const Home = () => {
  const [movieData, setMovieData] = useState([]);
  const [inputVal, setInputVal] = useState("iron man");
  const [loading, setLoding] = useState(false);


  // for get your api  key here: https://www.omdbapi.com/apikey.aspx

  const apiKey = 'your Api Key';

  const GetMovies = async (movieName) => {
    setLoding(true);
    let response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`
    );
    let data = await response.json();
    setMovieData(data.Search);
    setLoding(false);
  };
  const inputValues = (e) => {
    setInputVal(e.target.value);
  };

  useEffect(() => {
    GetMovies(inputVal);
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    GetMovies(inputVal);
  };

  return (
    <>
      <div className="search-container">
        <h1 className="logo">Osm Movies</h1>
        <div className="movie-search">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="search"
              placeholder="Search for a movie..."
              value={inputVal}
              onChange={inputValues}
            />
            <IoSearch
              size={"2rem"}
              className="icn"
              onClick={() => {
                GetMovies(inputVal);
              }}
            />
          </form>
        </div>
      </div>
      <span className="lists">
        {!loading && (
          <div className="container">
            {movieData && movieData.length ? (
              movieData.map((movie) => {
                return <Movie key={movie.imdbID} movies={movie} />;
              })
            ) : (
              <div>No Movies/Series Found</div>
            )}
          </div>
        )}
        {loading && <Loadar />}
      </span>
    </>
  );
};

export default Home;

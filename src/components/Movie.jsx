import React from 'react';
import './Movie.css';
import ErrImg from './not_found.jpg'

const Movie = ({ movies }) => {
  const { Title, Type, Poster ,Year } = movies;
   
  return (
    <div>
      
      <div className="card">
        <div className="image">
          <img src={Poster === "N/A" ? ErrImg : Poster} alt="Movie Poster" />
        </div>
        <div className="card-content">
          <div className="movie-title">{Title}</div>
          <div className="release-year">Release Year: {Year}</div>
          <div className="movie-type">Type: {Type}</div>
        </div>
      </div>
    </div>
  );
};

export default Movie

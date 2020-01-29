import React from 'react';
import {Link} from 'react-router-dom';
import MovieCard from './MovieCard';


const MovieList = ({movies}) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <MovieDetails movie={movie} />
        </Link>
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  return (
    <MovieCard movie={movie} />
  );
}

export default MovieList;

import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import MovieCard from './MovieCard';

const Movie = (props) => {
  // Setting up state for individual movie
  const [movie, setMovie] = useState();

  // Finding correct movieID 
  const { movieID } = useParams();

  // Getting data for individual movie
  useEffect(() => {
       axios
        .get(`http://localhost:5000/api/movies/${movieID}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[movieID]);
  
  

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <MovieCard movie={movie} addToSavedList={props.addToSavedList} />
  );
}

export default Movie;

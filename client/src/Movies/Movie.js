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
          console.log("response", response);
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[movieID]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <MovieCard movie={movie} />
  );
}

export default Movie;

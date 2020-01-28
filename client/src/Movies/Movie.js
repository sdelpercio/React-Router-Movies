import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const Movie = (props) => {
  // Setting up state for individual movie
  const [movie, setMovie] = useState();
  console.log("these are the props", props);

  // Finding correct movieID 
  const { movieID } = useParams();
  // console.log("here is the dynamic route", movieID);
  // const aMovie = props.movies.find(item => item.id === Number(movieID));
  
  // console.log("aMovie", aMovie.id);

  // Getting data for individual movie
  useEffect(() => {
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

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

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}

export default Movie;

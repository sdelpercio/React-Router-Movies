import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const Movie = ({movies}) => {
  // Setting up state for individual movie
  const [movie, setMovie] = useState();
 
  // Finding correct movieID 
  const movieID = useParams();
  console.log("here is movieID", movieID);
  const aMovie = movies.find(item => movieID === `${item.id}`);
  console.log("here is aMovie", aMovie);

  // Getting data for individual movie
  useEffect(() => {
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${aMovie.id}`)
        .then(response => {
          console.log(response);
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[aMovie]);
  
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

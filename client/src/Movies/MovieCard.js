import React from 'react';
import {useHistory} from 'react-router-dom';

const MovieCard = (props) => {
  // Destructuring props
  const { title, director, metascore, stars } = props.movie;

  // Building save functionality
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(props.movie);
  }

  // Checking if accessed from movie list or movie
  const historyCheck = useHistory();
  if (historyCheck.location.pathname === '/') {
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
      </div>
    );
  } else {
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
          <div onClick={saveMovie} className="save-button">Save</div>
        </div>
      );
  }

  
};

export default MovieCard;

import React from 'react';
import {useHistory} from 'react-router-dom';

const SavedList = props => {
  // Setting up function to return to home page
  const history = useHistory();
  function goHome() {
    history.push('/');
  }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
        {props.list.map(movie => (
          <span className="saved-movie">{movie.title}</span>
        ))}
    <div onClick={goHome} className="home-button">Home</div>
  </div>
  );
  
};

export default SavedList;

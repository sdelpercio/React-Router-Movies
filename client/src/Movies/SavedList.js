import React from 'react';
import {useHistory, Link} from 'react-router-dom';

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
          <Link to={`/movies/${movie.id}`} className="saved-movie">{movie.title}</Link>
        ))}
    <div onClick={goHome} className="home-button">Home</div>
  </div>
  );
  
};

export default SavedList;

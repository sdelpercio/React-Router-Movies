import React, { useState, useEffect } from 'react';
import {Route} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import axios from 'axios';

const App = () => {
  // Setting up saved list
  const [savedList, setSavedList] = useState( [] );
  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  // Setting up movie data for props
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/">
        <MovieList movies={movies} />
      </Route>
      <Route path="/movies/:movieID">
        <Movie movies={movies}/>
      </Route>
    </div>
  );
};

export default App;

import React from 'react';
import './style.css';

import Movie from './../Movie';



const MovieList= ({movies}) => {
  return (
    <ul className='movieList'> 
    
      {movies.map(item => {  
        return (
          <Movie 
            key={item.id}
            title={item.title} 
            poster={item.poster} 
            rating={item.rating} 
            genre={item.genre} 
            year={item.year} 
            director={item.director} 
            cast={item.cast}
          />
        )}
          
      )}
    </ul>
  )

}
  
export default MovieList;

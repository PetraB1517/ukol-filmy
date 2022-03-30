import React from "react";
import './style.css';
import Actor from "../Actor";


const Movie = ({title,poster, year,rating, director, genre,cast},{key}) => {
	key={key};
    return (
      <div className="movie">
					<img className="movie__image" src={`./assets/${poster}`} alt={title}></img>
					<div className="movie__content">
						<h3 className="movie__title">{title}</h3>
						
						<p className="movie__director">Režie: {director}</p>
						<p className="movie__info">{year}, {genre}</p>
						<p className="movie__rating">* <strong>{rating}</strong>/10</p>
						<div className="movie__cast">
							<h3 className="movie__roles" >Hrají:</h3>
							<ul className='rolesList'> 
    
      							{cast.map(item => {  
        							return (
          								<Actor 
            								key={item.name}
            								name={item.name} 
           									as={item.as} 
            								
										/>
								)}
								
							)}
							</ul>

						</div>
				</div>
		</div>

    );
  }

export default Movie;

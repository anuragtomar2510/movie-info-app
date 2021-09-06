import React from 'react'

const IMG_API = `https://image.tmdb.org/t/p/w1280`;

const Movie = ({movie}) => {
    return (
        <div className="movie">

            <img src={IMG_API + movie.poster_path} alt="Poster-image" className="movie-img"/>
            
            <div className="movie-info" >
                <h3>{movie.title}</h3>
                <span className="tag">{movie.vote_average}</span>
            </div>

            <div className="movie-overview">
                <h3>Overview</h3>
                <p>{movie.overview}</p>
            </div>
            
        </div>
    )
}

export default Movie

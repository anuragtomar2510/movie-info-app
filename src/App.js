import './App.css';
import React, {useState, useEffect} from 'react'
import Movie from './components/Movie'
import axios from 'axios'

const FEATURED_API =  `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f8f7b508cc36a9115eb64ed35d1c91e1&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=f8f7b508cc36a9115eb64ed35d1c91e1&query=`;

function App() {

  const [movies, setMovies] = useState([])
  const [movieName, setMovieName] = useState('')

  useEffect(() => {


    async function fetchMoviesByPopularity() {

        const res = await axios.get(FEATURED_API);

        setMovies(res.data.results)
        
    }

    fetchMoviesByPopularity()

  }, [])


  const onSubmit =  async (e) => {

      e.preventDefault()

     if(movieName) {

      const res = await axios.get(SEARCH_API + movieName)
      setMovies(res.data.results)

     }

  }

  

  return (
    <div className="wrapper">
      
        <div className="navbar">
            <h1 className="title" >Movie-info App</h1>
        </div>

        <div className="search-bar">
            <form onSubmit={onSubmit}>
              <input 
                className="search" 
                type="text" 
                placeholder="Search..."
                value={movieName}
                onChange={(e) => setMovieName(e.target.value)} 
              />
            </form>
        </div>

        <div className="movie-container">
            {
                  movies.map((movie) => (movie.poster_path && <Movie key={movie.id} movie={movie}/>))
            }
        </div>
    </div>
  );
}

export default App;

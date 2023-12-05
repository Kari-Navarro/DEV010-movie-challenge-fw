import { useState, useEffect } from 'react';
import { MoviesInterface } from '../Interface';
import MovieCards from './cards';
import"../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAnglesLeft, faAnglesRight, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

const baseUrl = 'https://api.themoviedb.org/3/discover/movie';
const imgUrl = 'https://image.tmdb.org/t/p/w500/'
const apiKey = 'aa8dc7b5a9f45758ed74868e082828cb'

const Paginator = () => {
const [movies, setMovies] = useState<MoviesInterface[]>([]);
const [currentPage, setCurrentPage] = useState(1);
//el estado actual,la funcion que permite actualizarlo
//Cuando se quiere cambiar el estado se llama a setCurretPage() y se le pasa el nuevo valor


const formatDate = (dateString: string) => {
const date = new Date(dateString).toLocaleDateString('en-US', { year: 'numeric' });
  return date
};

  useEffect(() => {
    const fetchMovies = async () => {
      fetch(`${baseUrl}?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc&with_genres=878&api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => setMovies(data.results))
    };

    fetchMovies();
  }, [currentPage]);




  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  }


  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(500)
    if (currentPage > 500) {
      setCurrentPage(500)
    }
  };

  return (
    <div className='movie-paginator'>
      <section className="movie-list-container">
        {movies.map((movie) => { //arreglo de objetos que se itera  
          return (
            <MovieCards
              key={movie.id}
              poster={imgUrl + movie.poster_path}
              title={movie.title}
              year={formatDate(movie.release_date)}
            />
          );
        })}
      </section>
      <section className='btn-container'>
      <button onClick={handleFirstPage} className='arrow'>
        <FontAwesomeIcon icon={faAnglesLeft} style={{color: "#f2f2f2",}} />
      </button>
      <button onClick={handlePrevPage} className='arrow'> 
        <FontAwesomeIcon icon={faChevronLeft} style={{color: "#f2f2f2",}} />
      </button>
      <button className='current-page'><span>{currentPage}</span> ... from 500 pages</button>
      <button onClick={handleNextPage} className='arrow'>
        <FontAwesomeIcon icon={faChevronRight} style={{color: "#f2f2f2",}} />
      </button>
      <button onClick={handleLastPage} className='arrow'>
        <FontAwesomeIcon icon={faAnglesRight} style={{color: "#f2f2f2",}} />
      </button>
      </section>
    </div>
  );
};

export default Paginator;

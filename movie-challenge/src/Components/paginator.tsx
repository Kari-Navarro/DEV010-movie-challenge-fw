
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { SetCurrentPageInterface } from "../Interface";

// const baseUrl = 'https://api.themoviedb.org/3/discover/movie';
// const imgUrl = 'https://image.tmdb.org/t/p/w500/'
// const apiKey = 'aa8dc7b5a9f45758ed74868e082828cb'

const Paginator = ({setCurrentPage,currentPage}:SetCurrentPageInterface) => {
  
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
     {/* <section className="movie-list-container">
    {/*  <MovieList movies={undefined} imgUrl={''}/>
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
      </section>*/}
      <section className='btn-container'>
        <button onClick={handleFirstPage} className='arrow' data-testid= 'firts-btn'>
          <FontAwesomeIcon icon={faAnglesLeft} style={{ color: "#f2f2f2", }} />
        </button>
        <button onClick={handlePrevPage} className='arrow' data-testid='prev-btn'>
          <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#f2f2f2", }} />
        </button>
        <button className='current-page'><span>{currentPage}</span> ... from 500 pages</button>
 {/*Renderizado condicional, "si currentPage es menor a 500 (true), entonces renderiza los siguiente..." */}
        {currentPage < 500 && (
          <>        
        <button onClick={handleNextPage} className='arrow' data-testid='next-btn'>
          <FontAwesomeIcon icon={faChevronRight} style={{ color: "#f2f2f2", }} />
        </button>
        <button onClick={handleLastPage} className='arrow' data-testid = 'last-btn'>
          <FontAwesomeIcon icon={faAnglesRight} style={{ color: "#f2f2f2", }}/>
        </button>
        </>
        )}
      </section>
    </div>
  );
};

export default Paginator;

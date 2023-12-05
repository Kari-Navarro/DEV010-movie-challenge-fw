import MovieCards from "./cards"
import FetchData from "../services";
import { MoviesInterface } from "../Interface";
import"../App.css"

const url='https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=5&sort_by=popularity.desc&with_genres=878&api_key=aa8dc7b5a9f45758ed74868e082828cb';
const imgUrl = 'https://image.tmdb.org/t/p/w500/'



function MovieList(){
    const movies: MoviesInterface[] = FetchData(url);
      //newDate:objeto almacena hora y fecha. toLocalDateString:devuelve en formato de fecha corta, acepta dos parametros 1.localización 2.las opciones a devolver
    const formatDate = (dateString: string) => {
   const date= new Date(dateString).toLocaleDateString('en-US', { year: 'numeric' });
   return date
  };
    return (
        <section className="movie-list-container">
            {movies.map((movie)=>{ //arreglo de objetos que se itera  
                return(
            <MovieCards
            key={movie.id}
            poster={imgUrl+movie.poster_path}
            title={movie.title}
            year={formatDate(movie.release_date)}
            />
            );
        })}
        </section>
    );
}
export default MovieList
 import MovieCards from "./cards"
 import"../App.css"
 import { MoviesInterface } from "../Interface";


 function MovieList({movies}:MoviesInterface[]){
    const imgUrl = 'https://image.tmdb.org/t/p/w500/'
//     //const movies: MoviesInterface[] = FetchData(url);
//       //newDate:objeto almacena hora y fecha. toLocalDateString:devuelve en formato de fecha corta, acepta dos parametros 1.localización 2.las opciones a devolver
      const formatDate = (dateString: string) => {
     const date= new Date(dateString).toLocaleDateString('en-US', { year: 'numeric' });
     return date
   };
     return (
           <section className= "movie-list-container">
               {movies.map((movie)=>{  
                  return(
             <MovieCards
             key={movie.id}
             poster={imgUrl+movie.poster_path}
             title={movie.title}
             year={formatDate(movie.release_date)}
             alt={movie.title}
             />
             );
         })}
         </section>
     );
 }
 export default MovieList
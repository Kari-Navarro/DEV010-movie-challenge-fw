import { useState, useEffect } from 'react'
import { MoviesInterface } from './Interface';
//import { MovieListInterface, MoviesInterface } from './Interface';
// Se colocan los puntos para saber de que tipo es la variable y los : por fuera para especificicar el tipo del dato que se esta retornando.

// const FetchData =(url:string):MoviesInterface[] => { 
//     const [dataUrl, setData] = useState<MoviesInterface[]>([]);

//          useEffect(() => {
//              fetch(url)
//                 .then(response => response.json())
//                  .then(data => {
//                      setData(data.results);
//                  });
//              //.catch(err => console.error(err));
//          }, [url]);
// return dataUrlda
// };





//const DataFetch =(url:string):MovieListInterface[] =>{
//const [movies, setMovies] = useState<MoviesInterface[]>([]);
  //const [currentPage, setCurrentPage] = useState(1);
  //el estado actual,la funcion que permite actualizarlo
  //Cuando se quiere cambiar el estado se llama a setCurretPage() y se le pasa el nuevo valor


//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString).toLocaleDateString('en-US', { year: 'numeric' });
//     return date
//   };

//   useEffect(() => {
//     const fetchMovies = async () => {
//       fetch(`${baseUrl}?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc&with_genres=878&api_key=${apiKey}`)
//         .then(response => response.json())
//         .then(data => setMovies(data.results))
//     };

//     fetchMovies();
//   }, [currentPage]);
//   return movies,setCurrentPage
// }

// export default DataFetch


// const FetchData =(currentPage:number):MoviesInterface[] => { 
//   const [movieList, setMovieList] = useState<MoviesInterface[]>([]);
//   const apiKey = 'aa8dc7b5a9f45758ed74868e082828cb'
//   const baseUrl = 'https://api.themoviedb.org/3/discover/movie';
// useEffect(() => {
//   fetch(`${baseUrl}?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc&with_genres=878&api_key=${apiKey}`)
//       .then(response => response.json())
//       .then(data => setMovieList(data.results)) 
//       .catch(error => console.error('Error fetching movies:', error));
// }, [currentPage]);

// return movieList
// }

// export default FetchData
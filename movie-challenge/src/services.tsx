import { useState, useEffect } from 'react'
import { MovieInterface } from './Interface';


// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYThkYzdiNWE5ZjQ1NzU4ZWQ3NDg2OGUwODI4MjhjYiIsInN1YiI6IjY1NTRmNDE1NTM4NjZlMDExYzA3MzJjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FcnFp0xXsQEk-Fkprp2gPRJMC58LWA3acDaGUMNndxs'
//     }
// };
// const imgUrl = 'https://image.tmdb.org/t/p/w500/'

// export default function Data() {
//     const [dataUrl, setData] = useState<Movie[]>([]);

//     useEffect(() => {
//         fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=878&api_key=aa8dc7b5a9f45758ed74868e082828cb')
//             .then(response => response.json())
//             .then(data => {
//                 setData(data.results)
//                 ;
//             });
//         //.catch(err => console.error(err));
//     }, []);

//     return (
//         <div className='data-container'>
//             {dataUrl.map((movie) => (
//                 <div className='img-container' key={movie.id}>
//                     <img src={imgUrl + movie.poster_path} alt={movie.title} className='movie' />
//                     <div className='title-year'>
//                         <span>{movie.title}</span>
//                         <p>{movie.release_date}</p>
//                     </div>
//                 </div>))}
//         </div>)
// }


// Se colocan los puntos para saber de que tipo es la variable y los : por fuera para especificicar el tipo del dato que se esta retornando.

const FetchData =(url:string):MovieInterface[] => { 
    const [dataUrl, setData] = useState<MovieInterface[]>([]);

         useEffect(() => {
             fetch(url)
                .then(response => response.json())
                 .then(data => {
                     setData(data.results);
                 });
             //.catch(err => console.error(err));
         }, [url]);
return dataUrl
};

export default FetchData
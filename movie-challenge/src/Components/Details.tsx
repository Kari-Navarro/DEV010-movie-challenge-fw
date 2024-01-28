//import { MoviesInterface } from "../Interface";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const apiKey = 'aa8dc7b5a9f45758ed74868e082828cb'
// interface DetailsProps {
//     movieId: number;
// }

function Details() {

    const {movieId} = useParams();
   
    const [movie, setMovie] = useState();
    console.log(movie)


        useEffect(() => {
            fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
                .then(response => response.json())
                .then(data => {
                    setMovie(data);
                });
            //.catch(err => console.error(err));
        }, [movieId]);
      
        
    
    //const imgUrl = 'https://image.tmdb.org/t/p/w500/'
    //const dataUrl = FetchData("https://api.themoviedb.org/3/movie/{movie_id}?api_key=aa8dc7b5a9f45758ed74868e082828cb")
    return (
    <div className='deteils-container'>
        <div className='img-container'>
            
                <div>
                    
                        <p>holaaaa!</p>
                        
                    
                </div>
            
        </div>
    </div>
    );
}
export default Details;

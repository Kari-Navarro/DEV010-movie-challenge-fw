import { CardInterface } from "../Interface"
import"../App.css"

function MovieCards({poster, title, year}:CardInterface){
    return (
    <div className='data-container'>
        <div className='img-container'>
            <img src={poster} className='movie-poster' />
        <div className='title-year'>
            <span>{title}</span>
            <p>{year}</p>
        </div>
        </div>
    </div>)

}
export default MovieCards
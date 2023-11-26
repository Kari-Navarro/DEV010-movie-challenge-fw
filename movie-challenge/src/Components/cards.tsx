import { MovieProps } from "../Interface"




const MovieCards = ({poster, title, year}:MovieProps) =>{
    return (
    <section className="movie-card">
        
        <div>
            <img src={dataUrl+dataURL.poster_path} alt={movie.title}/>
            <div>
                <span>{movie.title}</span>
            </div>
            <div>
                <p>{movie.title}</p>
            </div>
        </div>
    </section>
    )
}

export default MovieCards
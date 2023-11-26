import MovieCards from "./cards"


function MovieList({}:){
    return (
        <section className="movie-list-container">
            {peliculas.map((pelis)=>{ //arreglo de objetos que se itera  
                return(
            <MovieCards
            poster={movie.poster}
            title={movie.title}
            year={movie.year}
            />
            );
        })}
        </section>
    );
}
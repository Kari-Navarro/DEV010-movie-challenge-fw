import "./App.css"
import { MoviesInterface } from "./Interface";
import Paginator from "./Components/paginator";
import { useState, useEffect } from "react";
import MovieList from "./Components/movielist";
import SearchComponent from "./Components/search";

const baseUrl = 'https://api.themoviedb.org/3/discover/movie';
// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=5&sort_by=popularity.desc&with_genres=878&api_key=aa8dc7b5a9f45758ed74868e082828cb';
//const imgUrl = 'https://image.tmdb.org/t/p/w500/'
//const urlQueryGenre="https://api.themoviedb.org/3/discover/movie?query=avatar&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=878&api_key=aa8dc7b5a9f45758ed74868e082828cb"
const apiKey = 'aa8dc7b5a9f45758ed74868e082828cb'

function Home() {

    const [currentPage, setCurrentPage] = useState(1);
    const [movieList, setMovieList] = useState<MoviesInterface[]>([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        let url=baseUrl;
        if (search){
            url =`${baseUrl}?query=${search}&include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc&with_genres=878&api_key=${apiKey}`
        } else {

         url = `${baseUrl}?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc&with_genres=878&api_key=${apiKey}`}

        fetch(url)
            .then(response => response.json())
            .then(data => setMovieList(data.results))
            .catch(error => console.error('Error fetching movies:', error));
    }, [currentPage, search]);


    // const movieListFilter = !search ? movieList : movieList.filter((data) => data.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

    return (
        <section className="home">
            <SearchComponent search={search} setSearch={setSearch} />
            <MovieList movies={movieList} />
            <Paginator setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </section>
    );
}


export default Home;
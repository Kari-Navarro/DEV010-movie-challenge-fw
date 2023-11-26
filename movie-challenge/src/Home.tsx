import { useFetch } from "./services";


function Home(){
const {data} = useFetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=878&api_key=aa8dc7b5a9f45758ed74868e082828cb'")



}
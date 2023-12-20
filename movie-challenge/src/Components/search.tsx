import { ChangeEvent } from "react";


// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYThkYzdiNWE5ZjQ1NzU4ZWQ3NDg2OGUwODI4MjhjYiIsInN1YiI6IjY1NTRmNDE1NTM4NjZlMDExYzA3MzJjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FcnFp0xXsQEk-Fkprp2gPRJMC58LWA3acDaGUMNndxs'
//     }
//   };



//   fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&primary_release_year=2023&with_genres=878', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

//peliculas filtradas solo por el año 2023

type SearchComponentProps = {
    search: string,
    setSearch: (newValue: string) => void,
  };



const SearchComponent = ({search, setSearch}:SearchComponentProps) => {

    const searchValue = (e: ChangeEvent<HTMLInputElement>) =>{ 
        setSearch(e.target.value);
        console.log(e.target.value)
    };

    return (
        <div>
            <input 
            value={search} 
            onChange={searchValue} 
            type="text" 
            placeholder="Search" className="input-search" 
            />
        </div>
    );
};

export default SearchComponent
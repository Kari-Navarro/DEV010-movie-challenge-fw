import { Dispatch, SetStateAction } from 'react';
  
  
  
  export interface MoviesInterface{
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      string;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export interface  CardInterface{ //una interfaz describe el tipo de estructura de un objeto
  poster: string;
  title:string;
  year:string;
  alt:string;
}

export interface Url{
  url:string;
}

export interface MovieListInterface{
  movie: MoviesInterface[];
  imgUrl: string;
}

export interface SetCurrentPageInterface{
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage:number;
}
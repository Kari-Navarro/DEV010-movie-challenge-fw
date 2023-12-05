import { useState, useEffect } from 'react'
import { MoviesInterface } from './Interface';
// Se colocan los puntos para saber de que tipo es la variable y los : por fuera para especificicar el tipo del dato que se esta retornando.

const FetchData =(url:string):MoviesInterface[] => { 
    const [dataUrl, setData] = useState<MoviesInterface[]>([]);

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
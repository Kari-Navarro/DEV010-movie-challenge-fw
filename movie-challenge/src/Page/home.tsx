// hoja para el estado, donde vivirá el padre en común. Para alterar el estado tambien se pueden recibir funciones como props
import{useState} from "react";
// un componente padre solo puede regresar un componente hijo, por lo que si se desea regresar mas componentes, meter todo en un solo div
function Paginator(){
    const [movies, setmovies] = useState([]) //variable donde guardo mi estdo,funcion que modifica el estado y normalemnte se llama setMovie por ejemplo
    const handleClick =()=>{
        //funcion para cambiar 
    }
    return (
        <section>
            <button onClick={handleClick}>Click me</button>
        </section>
    )
}

export default Paginator
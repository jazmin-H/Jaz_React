//hooks -> useState 
import { useEffect, useState } from "react";

//camelcase es la manera de escribir en la cual cada palabra nueva arranca en mayuscula
 

export const Estado = () => {
    const [contador, setContador] = useState(0);  
 
    const handleClikc = () =>{
        setContador(contador + 1);
    };
    
//el useEffect se va a ejecutar la cantidad de veces y las dependencias 
//se actualizan (las dep son las q estan en los corchetes"[]")
//si no le pasan deps se ejecutara solo al principio de la app
//en el primer render
//si no se le pasa el array de deps siempre se va a ejecutar
    useEffect(() => {
        console.log("el contador se ha actualizado");
     }, [contador]);

     const arrayPersonajes = [
        {
            name: 'Rick',
            lastName: 'Sanchez',
            planet: 'Earth',
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        },
        {
            name: 'Morty',
            lastName: 'Smith',
            planet: 'Earth',
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        },
     ]
    return (

     <>
       <div className= "grilla-3x3" >
        {  //cuando despues de la funcion flecha hay parentesis significa q el retum es explicito
            arrayPersonajes.map((personaje, i) => (
                <div className="grilla" key={i}>
                   <h2> {personaje.name} {personaje.lastName} </h2>
                   <p>Planet: {personaje.planet}</p>
                   <img src= {personaje.image} alt="descripcion" />                 
                </div>
            ))
        }
       </div>
       <button onClick={handleClikc}> Aumentar</button>
       <p>{contador}</p>
     </>
    );
}
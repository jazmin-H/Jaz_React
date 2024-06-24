import { useEffect, useState } from "react";

export function Personajes (){
    const [personajes, setPersonajes] = useState([]); 
   useEffect(() => {
       fetch("https://rickandmortyapi.com/api/character")
       .then((response) => response.json())
       .then(personaje => setPersonajes(personaje.results));
   },[]);
   return( 
    <>
       {!personajes ? (
        <> Loading..</>
       ) : (
        <>
        {personajes.map((personaje, index) => 
        (
         <div>
         <h2>
             personajes: {personaje.name} {personaje.id}
             id : {personaje.body}
        </h2>
          <p>specie: {personaje.specie}</p>
         </div> 
        ))}
      
        </>
        )}
    </>
  );
}
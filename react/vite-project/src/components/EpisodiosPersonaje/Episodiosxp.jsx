import { useEffect, useState } from "react";

export function EpisodioPersonajes (){
    const [epis, setEpi] = useState([]); 
   useEffect(() => {
       fetch("https://rickandmortyapi.com/api/character")
       .then((response) => response.json())
       .then(epi => setEpisodioPersonaje(epi.results));
   },[]);
   return( 
    <>
       {!personajes ? (
        <> Loading..</>
       ) : (
        <>
        <div className="grilla-3x3">
        {personajes.map((personaje, index) => 
        (
          <div className="marco">  
           <img src= {personaje.image} alt="descripcion" /> 
          
           <h2>Nombre : {personaje.name} </h2>
            <p>id : {personaje.id}</p>
            <p>specie: {personaje.species}</p>
            <p>Planet: {personaje.status}</p>
         </div> 
         ))}
         </div>
        </>
        )}
    </>
  );
}
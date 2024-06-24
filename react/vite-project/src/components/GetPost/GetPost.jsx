import { useEffect, useState } from "react";


export function GetPost(){
     const [data, setData] = useState({}); 
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((responseData) => setData(responseData));
    },[]);
    return( 
    <>
       {!data ? (
        <> Loading..</>
       ) : (
        <>
          <h2>
             Objeto title: {data.title} {data.id}
             id : {data.body}</h2>
          <p>body: {data.body}</p>
        </>
           )}
    </>
  );
}
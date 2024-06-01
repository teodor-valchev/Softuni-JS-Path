import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const url = "https://swapi.dev/api/people/";

const Details = () => {
    const { gameId } = useParams("gameId");
    const [charachter, setCharachter] = useState({})
    useEffect(() => {
        fetch(url + `${gameId}`)
            .then(res => res.json())
            .then(data =>setCharachter(data) );
    },[])
    console.log(charachter);
    return (
        <>
            <h1>details game</h1>

            <h2>{charachter.name}</h2>
        </>
    );
}


export default Details
import { useEffect, useState } from "react";
import GameItem from "./GameItem";

const base_url = `https://swapi.dev/api/people`;

const Catalog = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        fetch(base_url, {
        }).then((res) => res.json().then((data) => setGames(data.results)));
    }, []);
    console.log(games);
    return (
        <>
            <h1>Memes Catalog</h1>
            {games.map((game,index) => (
                <GameItem key={index + 1} id={index + 1} {...game} />
            ))}
        </>
    );
};

export default Catalog;

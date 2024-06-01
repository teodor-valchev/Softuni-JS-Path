import { useEffect, useState } from "react";
import { X_RapidAPI_Key, X_RapidAPI_Host } from "./authTokens/authToken";
import GameItem from "./GameItem";

const base_url = `https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc`;

const Catalog = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        fetch(base_url, {
            headers: {
                "X-RapidAPI-Key": X_RapidAPI_Key,
                "X-RapidAPI-Host": X_RapidAPI_Host,
            },
        }).then((res) => res.json().then((data) => setGames(data)));
    });
    console.log(X_RapidAPI_Host);
    console.log(games);
    return (
        <>
            <h1>Memes Catalog</h1>
            {games.map((game) => (
                <GameItem key={game.id} {...game} />
            ))}
        </>
    );
};

export default Catalog;

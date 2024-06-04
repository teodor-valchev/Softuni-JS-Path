import { useEffect, useState } from "react";
import * as gameService from "../services/gameService";
import GameListItem from "./game-list-item/GameListItem";

const GameList = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll().then((games) => setGames(games));
    }, []);
    console.log(games);
    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* <!-- Display div: with information about every game (if any) --> */}

            {games.length ? (
                games.map((game) => <GameListItem key={game._id} {...game} />)
            ) : (
                <h3 className="no-articles">No articles yet</h3>
            )}
        </section>
    );
};

export default GameList;

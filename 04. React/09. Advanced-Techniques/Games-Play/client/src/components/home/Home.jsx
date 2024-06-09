import { useEffect, useState } from "react"

import LatestGamesItem from "../game-latest/LatestGamesItem";
import * as gameService from "../services/gameService";

const Home = () => {
    const [latestGames, setLatestGames] = useState([])

    useEffect(() => {
        gameService.latestGames()
        .then(data => setLatestGames(data))
    }, [])

    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="/images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>
                {latestGames ? latestGames.map(game => <LatestGamesItem key={game._id} {...game} />)
                    : <p className="no-articles">No games yet</p>}
            </div>
        </section>
    );
}

export default Home
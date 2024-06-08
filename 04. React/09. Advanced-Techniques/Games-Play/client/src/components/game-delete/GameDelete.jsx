import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as gameService from "../services/gameService";
import Path from "../../paths";

const GameDelete = () => {
    const { gameId } = useParams("gameId");
    const navigate = useNavigate()
    return (
        useEffect(() => {
            gameService.deleteGame(gameId)
                .then(data => {
                    alert("Game successfully deleted");
                    navigate(Path.Home)
                })
        },[gameId])
    )
};

export default GameDelete;

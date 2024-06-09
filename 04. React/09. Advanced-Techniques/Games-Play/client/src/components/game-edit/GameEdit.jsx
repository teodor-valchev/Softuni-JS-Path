import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

import * as gameService from "../services/gameService";

const initialValues = {
    title: "",
    category: "",
    maxLevel: "",
    image: "",
    summary: "",
};

const GameEdit = () => {
    const { gameId } = useParams("gameId");
    const navigate = useNavigate()
    const [game, setGame] = useState(initialValues);

    useEffect(() => {
        gameService.getOne(gameId)
        .then(result => setGame(result))
    }, [gameId])

    const onChange = (e) => {
        const { name, value } = e.target;
        setGame((state) => ({ ...state, [name]: value }));
    };

    const editSubmitHandler = async (e) => {
        e.preventDefault()
        const values = Object.fromEntries(new FormData(e.target))

        await gameService.editGame(gameId, values)
        navigate(`/details/${gameId}`)
    }

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={editSubmitHandler}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={game.title}
                        onChange={onChange}
                    />

                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={game.category}
                        onChange={onChange}
                    />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min="1"
                        value={game.maxLevel}
                        onChange={onChange}
                    />

                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="image"
                        value={game.image}
                        onChange={onChange}
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        value={game.summary}
                        onChange={onChange}
                    ></textarea>
                    <input
                        className="btn submit"
                        type="submit"
                        value="Edit Game"
                    />
                </div>
            </form>
        </section>
    );
}


export default GameEdit
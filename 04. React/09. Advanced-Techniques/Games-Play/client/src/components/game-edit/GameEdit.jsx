import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

import * as gameService from "../services/gameService";
import { useForm } from "../../hooks/useForm";

const GameEdit = () => {
    const { gameId } = useParams("gameId");
    const navigate = useNavigate()
    const [game, setGame] = useState({
        title: "",
        category: "",
        maxLevel: "",
        image: "",
        summary: "",
    });

    useEffect(() => {
        gameService.getOne(gameId)
        .then(result => setGame(result))
    }, [gameId])

    const editSubmitHandler = async(values) => {
        await gameService.editGame(gameId, values)
        navigate(`/details/${gameId}`)
    }

    const { values, onChange, onFormSubmit } = useForm(editSubmitHandler, game);

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onFormSubmit}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={values.title}
                        onChange={onChange}
                    />

                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={values.category}
                        onChange={onChange}
                    />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min="1"
                        value={values.maxLevel}
                        onChange={onChange}
                    />

                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="image"
                        value={values.image}
                        onChange={onChange}
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        value={values.summary}
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
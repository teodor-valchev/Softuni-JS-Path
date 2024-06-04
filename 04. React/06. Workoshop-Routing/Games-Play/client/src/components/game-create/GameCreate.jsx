import { useRef } from "react";
import * as gameService from '../services/gameService.js'
import { useNavigate } from "react-router-dom";

const GameCreate = () => {
    const navigate = useNavigate();
    const titleInput = useRef('')
    const categoryInput = useRef(""); 
    const maxLevelInput = useRef(0); 
    const imageInput = useRef(""); 
    const summaryInput = useRef(""); 

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        const title = titleInput.current.value;
        const category = categoryInput.current.value;
        const maxLevel = maxLevelInput.current.value;
        const image = imageInput.current.value;
        const summary = summaryInput.current.value;

        const gameData = {
            title,
            category,
            maxLevel,
            image,
            summary,
        };
        
        try {
            await gameService.createGame(gameData);
            navigate( "/all-games");
        } catch (err) {
            alert(err.message)
        }
    }
    
    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmitHandler}>
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter game title..."
                        ref={titleInput}
                    />

                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter game category..."
                        ref={categoryInput}
                    />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min="1"
                        placeholder="1"
                        ref={maxLevelInput}
                    />

                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                        ref={imageInput}
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        ref={summaryInput}
                        name="summary"
                        id="summary"
                    ></textarea>
                    <input
                        className="btn submit"
                        type="submit"
                        value="Create Game"
                    />
                </div>
            </form>
        </section>
    );
};

export default GameCreate;

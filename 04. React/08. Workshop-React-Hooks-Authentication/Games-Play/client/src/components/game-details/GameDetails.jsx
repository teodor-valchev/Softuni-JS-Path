import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as gameService from "../services/gameService";
import * as commentService from "../services/commentService";

const GameDetails = () => {
    const { gameId } = useParams("gameId");
    const [game, setGame] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        gameService.getOne(gameId).then((data) => setGame(data));
        commentService.getAll(gameId).then((data) => setComments(data));
    }, [gameId]);

    const commentHandler = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        let comment = data.get("comment");

        const newComment = await commentService.createComment(gameId, comment);
        setComments((state) => [...state, newComment]);
        e.target.comment.value = ''
    };

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.image} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* <!-- list all comments for current game (If any) --> */}
                        {comments.length ? (
                            comments.map((comment) => (
                                <li key={comment._id} className="comment">
                                    <p>{comment.text}</p>
                                </li>
                            ))
                        ) : (
                            <p className="no-comment">No comments.</p>
                        )}
                    </ul>
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                {/* <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div> */}
            </div>

            {/* <!-- Bonus -->
            <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form onSubmit={commentHandler} className="form">
                    <textarea
                        name="comment"
                        placeholder="Comment......"
                    ></textarea>
                    <input
                        className="btn submit"
                        type="submit"
                        value="Add Comment"
                    />
                </form>
            </article>
        </section>
    );
};

export default GameDetails;

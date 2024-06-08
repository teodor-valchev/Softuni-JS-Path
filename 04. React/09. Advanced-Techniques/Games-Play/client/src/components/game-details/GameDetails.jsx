import { useContext, useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import AuthContext from "../../context/authContext";
import * as gameService from "../services/gameService";
import * as commentService from "../services/commentService";
import { useForm } from "../../hooks/useForm";
import Path from "../../paths";

const GameDetails = () => {
    const { userId } = useContext(AuthContext)
    const { gameId } = useParams("gameId");
    const [game, setGame] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        gameService.getOne(gameId).then((data) => setGame(data));
        commentService.getAll(gameId).then((data) => setComments(data));
    }, [gameId]);

    const commentHandler = async (values) => {
        const newComment = await commentService.createComment(gameId, values.comment);
        
        setComments((state) => [...state, newComment]);
    };

    const initialValues = useMemo(() => ({
        comment: ''
    }),[])
    const { values, onChange, onFormSubmit } = useForm(commentHandler,initialValues);

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
                {userId === game._ownerId && (
                    <div className="buttons">
                        <Link to={Path.Edit.replace(':gameId', gameId)} className="button">
                            Edit
                        </Link>
                        <Link to={Path.Delete.replace(':gameId', gameId)} className="button">
                            Delete
                        </Link>
                    </div>
                )}
            </div>

            {/* <!-- Bonus -->
            <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form onSubmit={onFormSubmit} className="form">
                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        onChange={onChange}
                        value={values.comment}
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

import * as request from "../../lib/request.js";
const base_url = "http://localhost:3030/jsonstore/comments";

export const createComment = async (gameId, text) => {
    const data = {
        gameId,
        text,
    };

    const comment = await request.post(base_url, data);

    return comment;
};

export const getAll = async (gameId) => {
    const comments = await request.get(base_url);

    //here the problem is over-fetching!
    return Object.values(comments).filter(
        (comment) => comment.gameId === gameId
    );
};

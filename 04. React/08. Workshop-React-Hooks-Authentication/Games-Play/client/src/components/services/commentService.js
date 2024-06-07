import * as request from "../../lib/request.js";
const base_url = "http://localhost:3030/data/comments";

export const createComment = async (gameId, text) => {
    const data = {
        gameId,
        text,
    };

    const comment = await request.post(base_url, data);

    return comment;
};

export const getAll = async (gameId) => {
    const query = new URLSearchParams({
        where: `gameId="${gameId}"`,
        load:`owner=_ownerId:users`
        });
        
    const comments = await request.get(`${base_url}?${query}`);
    
    return comments
};

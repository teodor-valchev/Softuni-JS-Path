const base_url = "http://localhost:3030/jsonstore/comments";

export const createComment = async (gameId, text) => {
    const data = {
        gameId,
        text,
    };

    const response = await fetch(base_url, {
        method: 'POST',
        body:JSON.stringify(data)
    });

    const comment = await response.json()
    return comment
};

export const getAll = async (gameId) => {
    const response = await fetch(base_url)
    const comments = await response.json()
    const filteredComments = Object.values(comments).filter(comment => comment.gameId === gameId)
    
    return filteredComments;
}
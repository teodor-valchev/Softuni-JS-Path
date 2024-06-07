import * as request from "../../lib/request.js";
const base_url = "http://localhost:3030/data/games";

export const createGame = async (gameData) => {
    const result = await request.post(base_url, gameData);

    return result;
};

export const getAll = async () => {
    const result = await request.get(base_url);

    return result;
};

export const getOne = async (id) => {
    const game = await request.get(`${base_url}/${id}`);

    return game;
};

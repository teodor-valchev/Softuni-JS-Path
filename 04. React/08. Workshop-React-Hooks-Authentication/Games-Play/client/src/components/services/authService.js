import * as request from "../../lib/request.js";

const base_url = "http://localhost:3030/users";

export const login = async (userData) => {

    const result = await request.post(`${base_url}/login`, userData);

    return result
};

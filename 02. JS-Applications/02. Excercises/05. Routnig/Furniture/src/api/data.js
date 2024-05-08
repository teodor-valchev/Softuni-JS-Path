import * as api from "./api.js";

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    all: "/data/catalog",
    create: "/data/catalog",
    details: "/data/catalog/",
    del: "/data/catalog/",
    update: "/data/catalog/",
    myFurniture: (userId) => `/data/catalog?where=_ownerId%3D%22${userId}%22`,
};

export async function getAll() {
    return api.get(endpoints.all);
}

export async function create(data) {
    return api.post(endpoints.create, data);
}

export async function details(id) {
    return api.get(endpoints.details + id)
}

export async function deleteItem(id) {
    return api.del(endpoints.del + id);
}

export async function updateItem(id,data) {
    return api.put(endpoints.update + id,data);
}

export async function getMyItems(userId) {
    return api.get(endpoints.myFurniture(userId));
}


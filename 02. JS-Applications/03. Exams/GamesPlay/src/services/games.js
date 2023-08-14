import * as api from './api.js'

const endpoint = {
    recent: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    catalog :'/data/games?sortBy=_createdOn%20desc',
    create : '/data/games',
    byId : '/data/games/',
    deleteById: '/data/games/',
    editUrl: '/data/games/'
}

export async function getRecent (){
    return api.get(endpoint.recent);
}

export async function getCatalog (){
    return api.get(endpoint.catalog);
}


export async function create (data){ // това е след getCatalog
return api.post(endpoint.create,data)
}

export async function getById(id){
return api.get(endpoint.byId + id)
}

export async function deleteById(id){ // на delete просто слагам същото id като адрес
return api.del(endpoint.deleteById + id)
}

export async function editGame(id,data){
    return api.put(endpoint.editUrl + id,data);
}
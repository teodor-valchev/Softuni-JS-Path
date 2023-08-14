import * as api from './api.js'


const endpoints = {
    allBooks: '/data/books?sortBy=_createdOn%20desc',
     createUrl:'/data/books',
     detailsUrl:'/data/books/',
     editUrl:'/data/books/',
     myBooksUrl:'/data/books?where=_ownerId%3D%22{userId}%22&sortBy=_createdOn%20desc'
}

export async function  getAll() {
return  await api.get(endpoints.allBooks)
}
export async function createBook(data){
    return api.post(endpoints.createUrl,data);
}



export async function getById(id){
    return api.get(endpoints.detailsUrl + id)
}
export async function deleteById(id){
    return api.del(endpoints.detailsUrl + id)
}
export async function edit(id,data){
    return api.put(endpoints.editUrl + id,data)
}





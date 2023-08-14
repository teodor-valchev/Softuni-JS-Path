import * as api from './api.js'
import { clearUserData, setUserData } from '../util.js'

const endpoints = {
    loginUrl:'/users/login',
    registerUrl:'/users/register',
    logoutUrl:'/users/logout'
}


export async function  login(email,password){
    const result =await  api.post(endpoints.loginUrl,{email,password})
    setUserData(result);  
    return result;
    }

    export async function  register(email,password){
        const result =await  api.post(endpoints.registerUrl,{email,password})
        setUserData(result);  
        return result;
        }


        export async function logout(){
            api.get(endpoints.logoutUrl)
            clearUserData();
        }
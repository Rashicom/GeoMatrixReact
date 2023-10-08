import axios, { Axios } from "axios";
import { userURL } from "../Constants";


const userapiInstance = axios.create({
    baseURL:userURL,
    headers: {
        'Content-Type': 'application/json',
    },
    
})

// normal user login
export const loginUser = async (credencials)=> {
    try{
        const responce = await userapiInstance.post('/login/', credencials)
        return responce.data
    }
    catch(error) {
        throw error.response
    }
}


// gov user login
export const loginGovuser = async (credencials)=> {
    try{
        const responce = await userapiInstance.post('/gov_login/', credencials)
        return responce.data
    }
    catch(error) {
        throw error.response
    }
}  



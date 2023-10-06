import axios, { Axios } from "axios";
import { userURL } from "../Constants";


const userapiInstance = axios.create({
    baseURL:userURL,
    headers: {
        'Content-Type': 'application/json',
    },
    
})


export const loginUser = async (credencials)=> {
    
    try{
        const responce = await userapiInstance.post('/login/', credencials)
        return responce.data
    }
    catch(error) {
        if(error.response.status == 401){
            throw error;
        }
    }
   
    
}   



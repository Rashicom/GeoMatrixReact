import axios, { Axios } from "axios";
import { useraxiosInstance } from "../../Interceptors/request";
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

// fetch already signed in user
export const fetchuserInfo = async () => {
    try{
        const response = await useraxiosInstance.get('/get_user/')
        return response.data
    }
    catch (error) {
        throw error
    }
}


// fetch authenticated users wallet balance
export const fetchuserWalletbalance = async () => {
    try{
        const response = await useraxiosInstance.get('/get_wallet_balance/')
        return response.data
    }
    catch (error) {
        throw error
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




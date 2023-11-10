import axios, { Axios } from "axios";
import { cadastreaxiosInstance } from "../../Interceptors/request";



// add single cadastre api
export const add_cadastre = async(data)=> {
    try{
        const response = await cadastreaxiosInstance.post('/register_land/',data)
        return response.data
    }
    catch(error) {
        throw error
    }
}


// Bulk add cadastre api
export const bulkadd_cadastre = async(data)=> {
    try{
        const response = await cadastreaxiosInstance.post('/bulk_register_land/',data)
        return response.data
    }
    catch(error) {
        throw error
    }
}



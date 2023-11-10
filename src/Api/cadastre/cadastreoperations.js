import axios, { Axios } from "axios";
import { cadastreaxiosInstance } from "../../Interceptors/request";



// crete cadastre
export const change_land_ownership = async(data)=> {
    try{
        const response = await cadastreaxiosInstance.post('/change_land_ownership/',data)
        return response.data
    }

    catch(error) {
        throw error
    }

}





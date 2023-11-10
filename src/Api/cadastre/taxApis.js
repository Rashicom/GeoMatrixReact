import axios, { Axios } from "axios";
import { cadastreaxiosInstance } from "../../Interceptors/request";


// fetch all active taxes
export const fetch_active_taxes = async()=> {
    try{
        const response = await cadastreaxiosInstance.get('/generate_tax_invoice/')
        return response.data
    }
    catch(error) {
        throw error
    }
}

import axios, { Axios } from "axios";
import { cadastreaxiosInstance } from "../../Interceptors/request";
import { cadastreURL } from "../Constants";

// import initialized api from interceptor


// fetch users cadastre list
export const fetchcadastreList = async ()=> {
    try {
        const response = await cadastreaxiosInstance.get('/get_user_land/')
        return response.data
    }
    catch (error) {
        throw error
    }
}

//fetch government cadastre list
export const fetch_govcadastreList = async () => {
    try{
        const responce = await cadastreaxiosInstance.get('/get_land/')
        return responce.data
    }
    catch (error) {
        throw error
    }
}


// fetch users tax invoice details
export const fetchInvoice = async (queryParams)=> {
    try{
        const responce = await cadastreaxiosInstance.get('/get_user_invoices/',{params:queryParams})
        return responce.data
    }
    catch (error) {
        throw error.response
    }
}



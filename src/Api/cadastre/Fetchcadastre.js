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



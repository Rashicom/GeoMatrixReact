import axios, { Axios } from "axios";
import { cadastreURL } from "../Constants";


// create instance
const cadastreInstance = axios.create({
    baseURL: cadastreURL,
    headers: {
        'Content-Type' : 'application/json',

    },
})


// fetch users cadastre list
export const fetchcadastreList = async ()=> {
    try {
        const response = await cadastreInstance.get('/get_user_land')
        return response.data
    }
    catch (error) {
        throw error.response
    }
}



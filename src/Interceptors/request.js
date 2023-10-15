import axios from "axios";
import { blogURL, cadastreURL, datalabURL, userURL } from "./Constants";

// here wedifine axios instance and add a request interceptor
// wchich add access tocken to the header just befor the api send


// we have to create 4 axios instances for each microservices
const useraxiosInstance = axios.create({
    baseURL:userURL
})
const cadastreaxiosInstance = axios.create({
    baseURL:cadastreURL
})
const datalabaxiosInstance = axios.create({
    baseURL:datalabURL
})
const blogaxiosInstance = axios.create({
    baseURL:blogURL
})



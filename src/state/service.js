import axios from "axios";
import { API_URL } from "../config";
import { fetchProductRequest } from "./actions";

export const axiosInstance = axios.create({
    baseURL: API_URL,
    headers:{
        'Content-Type': 'application/json'
    }
})



import axios from "axios";
import { json } from "zod";

export const mainApi = axios.create({
    baseURL: 'http://localhost:3000/api', 
    headers: {
        'Content-Type': 'application/json'
    }
})

export const apiRegister = async (body) => {
    return await mainApi.post("/auth/register", body)
}
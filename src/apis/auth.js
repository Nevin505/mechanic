import axios from "axios"
import { BASE_URL } from "./commonAPI"

export const registerUser=async(user)=>{
    return await axios.post(`${BASE_URL}/user/register`,user,{})
}

export const loginUser=async(user)=>{
    return await axios.post(`${BASE_URL}/user/login`,user,{})
}
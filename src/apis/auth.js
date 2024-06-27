import axios from "axios"
import { BASE_URL } from "./commonAPI"

export const postUser=async(user)=>{
    return await axios.post(`${BASE_URL}/auth/register`,user,{})
}
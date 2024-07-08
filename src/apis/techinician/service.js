import axios from "axios"
import { BASE_URL } from "../commonAPI"

export const fetchTechinican=async()=>{
    return await axios.get(`${BASE_URL}/techinician/details`,{},{})
}
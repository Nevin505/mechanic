import axios from "axios"
import { BASE_URL } from "../commonAPI"

export const addTechinican=async(reqbody)=>{
    return await axios.post(`${BASE_URL}/admin/add-technician`,reqbody,{})
}
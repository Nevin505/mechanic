import axios from "axios"
import { BASE_URL } from "../commonAPI"

export const fetchService=async(service)=>{
    console.log(service)
return await axios.get(`${BASE_URL}/service?type=${service}`,{},{})
}

export const postUserVehicleDetails=async(service,reqHeaders)=>{
    return await axios.post(`${BASE_URL}/addService`,service,reqHeaders)
    }
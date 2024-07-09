import axios from "axios"
import { BASE_URL } from "../commonAPI"

// Api to add  a Techinician
export const addTechinican=async(reqbody)=>{
    return await axios.post(`${BASE_URL}/admin/add-technician`,reqbody,{})
}

// api to fetch all the order to being assigined
export const getNewServiceOrder=async(serviceStatus)=>{
    return await axios.get(`${BASE_URL}/admin/fetch-orders?status=${serviceStatus}`,{},{})
}

// Api to sort time
export const getTime=async(sortBy)=>{
    return await axios.get(`${BASE_URL}/admin/sortByDate?order=${sortBy}`,{},{})
}

// Api to filter by Service Type
export const filterByType=async(sortBy)=>{
    return await axios.get(`${BASE_URL}/admin/sortByType?order=Created&&filterBy=${sortBy}`,{},{})
}

// Api to fetch techinican Details
export const fetchTechinicianDetails=async()=>{
    return await  axios.get(`${BASE_URL}/admin/fetch-technician-details`,{},{})
}

export const getVehiclesCount=async()=>{
    return await axios.get(`${BASE_URL}/admin/get-count`,{},{})
}
// To assigin Techinicain
export const assiginTechinician=async(reqbody)=>{
return await axios.put(`${BASE_URL}/admin/assigin-techini`,reqbody)
}

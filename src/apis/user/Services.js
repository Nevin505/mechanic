import axios from "axios";
import { BASE_URL } from "../commonAPI";

export const fetchService = async (service) => {
  console.log(service);
  return await axios.get(`${BASE_URL}/service?type=${service}`, {}, {});
};

export const postUserVehicleDetails = async (service, reqHeaders) => {
  return await axios.post(`${BASE_URL}/addService`, service, reqHeaders);
};

export const updateCartDetails=async(reqBody)=>{
    return await axios.put(`${BASE_URL}/addOrder`,reqBody,{})
}

// to get the user service history
export const serviceHistory=async(reqHeaders)=>{
  return await axios.get(`${BASE_URL}/user/service-history`,reqHeaders)
}
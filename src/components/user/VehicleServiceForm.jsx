import { useState } from "react";

import Input from '../Input'
import Button from '../Button'

import { VEHICLE_SERVICE_FORMS } from "../../utils/UserPageContent"
import { valiadateInputs } from "../../utils/FormValidation";
import { postUserVehicleDetails } from "../../apis/user/Services";
import UserService from "./UserService";


const VehicleServiceForm = ({userServices}) => {
  
  const authToken=sessionStorage.getItem("token")

  const [errors, setErrors] = useState();

  const[isFormSubmitted,setFormSubmitted]=useState(false);


  const errorHandler=(formErrors)=>{
    setErrors(formErrors)
  }

  const vehicleRegistrationFormHandler = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
 
    const numberPlate = formData.get("numberPlate");
    const company = formData.get("company");
    const model = formData.get("model");
   
   const validateKeys={ numberPlate,company,model}

    const valiadte = valiadateInputs(errorHandler,validateKeys);
  if (valiadte) {
    try {
      const requestObject={vehicleNumber:numberPlate,company,model}
      const reqHeaders={headers:{
        "Authorization":`Bearer ${authToken}`
      }}
      try{
        const response = await postUserVehicleDetails(requestObject,reqHeaders);
        if(response.status===201)
        console.log("response",response)
        setFormSubmitted(true)
      }
      catch(error){
         alert("Error")
      }
    } catch (error) {
      console.log(error)
      alert("Something went Wrong");
    }
  } else {
    alert("Errors");
  }
}
  return (
    <div className="flex  flex-col justify-between items-center px-4 py-2 border-2 border-primary-600 ">
      <h1>Enter Your Vehicle Details</h1>
        <form className="flex flex-col gap-4 justify-center"  onSubmit={(e)=>vehicleRegistrationFormHandler(e)} >
          {!isFormSubmitted?VEHICLE_SERVICE_FORMS.map(VehicleServiceform=>{
            return (<div
            className="flex flex-col items-center  relative py-2 w-full"
            key={VehicleServiceform.name}
          >
            <Input
              type={VehicleServiceform.type}
              placeholder={VehicleServiceform.placeholder}
              name={VehicleServiceform.name}
            />
            {errors?.[VehicleServiceform.name] && (
              <p className="absolute -bottom-3 text-red-500 font-semibold">
                {errors[VehicleServiceform.name]}
              </p>
            )}
          </div>)
          }):
         <UserService/> }
          <Button>Submit</Button>
        </form>
    </div>
  )
}

export default VehicleServiceForm

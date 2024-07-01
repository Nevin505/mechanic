import { useState } from "react";

import Input from '../Input'
import Button from '../Button'

import { VEHICLE_SERVICE_FORMS } from "../../utils/UserPageContent"
import { valiadateInputs } from "../../utils/FormValidation";
import { postUserVehicleDetails } from "../../apis/user/Services";
import UserService from "./UserService";


const VehicleServiceForm = ({userServices,clearPreviousOrder}) => {
  
  const authToken=sessionStorage.getItem("token")

  const [errors, setErrors] = useState();

  const[cartState,setCartState]=useState({submitted:false,orderId:""});

  const showVehicleRegistrationForm=()=>{
    setCartState({submitted:false,orderId:""})
    clearPreviousOrder()
  }


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
      // Adding Request Body
      const requestObject={vehicleNumber:numberPlate,company,model}
      // Adding Request Headers for Authentication
      const reqHeaders={headers:{
        "Authorization":`Bearer ${authToken}`
      }}
  
        const response = await postUserVehicleDetails(requestObject,reqHeaders);
        if(response.status===201)
        console.log("response",response)
        setCartState({submitted:true,orderId:response.data.order_id})
    
    } catch (error) {
      console.log(error)
      alert("Something went Wrong");
    }
  } else {
    alert("Errors");
  }
}
console.log("The Cart")
console.log(cartState)
  return (
    <div className="flex  flex-col  gap-8 items-center px-4 py-2 border-2 border-primary-600 ">
      <h1>Enter Your Vehicle Details</h1>
       
          {!cartState.submitted?
           <form className="flex flex-col gap-4 items-center justify-between h-full"  onSubmit={(e)=>vehicleRegistrationFormHandler(e)} >
         { VEHICLE_SERVICE_FORMS.map(VehicleServiceform=>{
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
          </div>)}
        )}
          <Button>Submit</Button>
        </form>:
         <UserService userServices={userServices}  cartOrderId={cartState.orderId} showVehicleRegistrationForm={showVehicleRegistrationForm}/> }
    </div>
  )
}

export default VehicleServiceForm

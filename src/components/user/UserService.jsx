import { useState } from 'react'
import { updateCartDetails } from '../../apis/user/Services'
import Button from '../common/Button'
const UserService = ({userServices,cartOrderId,showVehicleRegistrationForm}) => {

  console.log(userServices)
  const serviceCharges=userServices.length>0?userServices.reduce((prevamount,cureentamount)=>prevamount+cureentamount.price,0):0

  const[orderStatus,setOrderStatus]=useState(false);

// to add Services to the cart
  const updateCart=async()=>{
          if(userServices.length>0){
            const reqBody={cartId:cartOrderId,userServices};
            const response=await updateCartDetails(reqBody);
            if(response.status===200){
             console.log("Here")
             setOrderStatus(true)
            }
            console.log(response)
          }
          else{
            alert("Add Services")
          }
  }

  const newServiceOrderHandler=()=>{
    showVehicleRegistrationForm();
  }
  
  return (
    <div className="flex flex-col justify-between items-center w-full h-full">
       {!orderStatus ? <>
        <h1>You Services</h1>
         {userServices?.map(service=>{
            return  <div className="flex justify-between"  key={service._id}>
               <p>{service.name}</p>
               <p>{service.price}</p>
            </div>
         })}
         <p>Charges:{serviceCharges}</p>
         <Button onClick={updateCart}>checkout</Button>
       </>:
          <div>
            Service Order Placed
            <Button onClick={newServiceOrderHandler}>Add New Order</Button>
            </div>}
    </div>
  )
}

export default UserService

import { useEffect, useState } from "react";
import { fetchService } from "../../apis/user/Services";

import Button from "../common/Button";
import VehicleServiceForm from "./VehicleServiceForm";

const ServiceAndVehicleRegistration = ({ services ,serviceType}) => {

  const [service, setService] = useState();

   const[userServices,setUserService]=useState([]);
  

  useEffect(() => {
    console.log(services);
    if (services) {
      (async () => {
        try {
          const result = (await fetchService(services)).data;
          console.log(result);
          setService(result.services);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [services]);


  // to place a service for the user Vehicle
  const addUserServiceHandler=(service)=>{
    console.log("clicked")
    console.log(service)
    const userService={...service,serviceType};
    const prevUserServices=[...userServices];
   const result=prevUserServices.find((prevService=>prevService._id===service._id));
   if(!result){
    setUserService([...prevUserServices,userService])
   }
   else{
    alert("Already Added")
   }
  }

  // To clear Orders

  const clearPreviousOrder=()=>{
    setUserService([])
  }

console.log(userServices)
  return (
    <div className="flex justify-between  lg:gap-8" >
        <div className="flex flex-col  flex-1  overflow-y-auto h-[23rem]">
        {services
        ? service?.map((service) => {
            return (
                <div className="flex flex-col flex-1 gap-3 border-2 px-4 py-2 border-primary-600" key={service.name}>
                  <h1></h1>
                  <h2 className="text-bold">{service.name}</h2>
                  <p>Description:{service.description}</p>
                  <p>Time: {service.duration} minutes</p>
                  <p>Price: {service.price}</p>
                  <Button onClick={()=>addUserServiceHandler(service)}>Add</Button>
                </div>
            );
          })
        :  <p >Please Select a Service</p>}
        </div>
          <VehicleServiceForm userServices={userServices} clearPreviousOrder={clearPreviousOrder}/>
    </div>
  );
};

export default ServiceAndVehicleRegistration;

// return(
//   <>
//   {servicess?.map(service=>{
//       return(
//         <>
//         <p>{service.name}</p>
//         <p>{service.description}</p>
//         <p>{service.duration}</p>
//         <p>{service.price}</p>
//         </>
//       )
//   })}
//   </>
// );
// }

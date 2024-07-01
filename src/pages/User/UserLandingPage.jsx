import SideNav from "../../components/user/SideNav";
import Services from "../../components/user/Services";


import VehicleServiceForm from "../../components/user/VehicleServiceForm";
import { useState } from "react";
import ServiceAndVehicleRegistration from "../../components/user/ServiceAndVehicleRegistration";


const UserLandingPage = () => {
 
  const[service,setService]=useState("");

  // const[userServices,setUserService]=useState([]);
  

  // const addUserServiceHandler=(service)=>{
  //   console.log("clicked")
  //   console.log(service)
  //   const prevUserServices=[...userServices];
  //  const result=prevUserServices.find((prevService=>prevService._id===service._id));
  //  if(!result){
  //   setUserService([prevUserServices,service])
  //  }
  //  else{
  //   alert("Already Added")
  //  }
  // }

  const selectService=(service)=>{
    setService(service)
  }
  // console.log(userServices)

  return (
    <section className="max-container flex flex-col  ">
      <SideNav/>
      <div className="flex flex-col items-center px-4 pt-8 max-lg:pt-16">
        <h1>Go Mechanic Car Service -Online Booking</h1>
        {/* Service  Vertical Scroll bar */}
        <Services selectService={selectService}/>
        {/* Basic Service Offered Description and Vehicle Registration Form */}
        <div className="flex  gap-4 justify-between items-center w-full lg:px-28 py-8 max-lg:px-8 max-lg:flex-col">
          {/* <ServiceDescription services={service}/> */}
          <div className="flex flex-col flex-1">
          <ServiceAndVehicleRegistration  services={service}/>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UserLandingPage;

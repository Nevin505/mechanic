import SideNav from "../../components/SideNav";
import Services from "../../components/user/Services";


import { useState } from "react";
import ServiceAndVehicleRegistration from "../../components/user/ServiceAndVehicleRegistration";
import { USER_SIDE_NAV } from "../../utils/UserPageContent";
import Button from "../../components/Button";


const UserLandingPage = () => {
 
  const[service,setService]=useState("");

  const selectService=(service)=>{
    setService(service)
  }

  return (
    <section className="max-container flex flex-col  ">
      <SideNav>
      {USER_SIDE_NAV.map((sideNav,index) => {
              return (
                <div key={index} className="text-white cursor-pointer hover:bg-slate-950">
                  {sideNav}
                </div>
              );
            })}
            <div>
              <Button>Logout</Button>
            </div>
        </SideNav>
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

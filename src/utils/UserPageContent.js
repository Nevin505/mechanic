import periodicServices from "../assets/user-page/acservicerepair5.jpg";
import batteries from "../assets/user-page/batteries3.jpg";
import dentingpainting2 from "../assets/user-page/dentingpainting2.jpg";
import Engine_Decarbonization from "../assets/user-page/Engine_Decarbonization.png";
import tyreswheels from "../assets/user-page/tyreswheels6.jpg";
import lightsfitments from "../assets/user-page/lightsfitments.jpg";
import cleaning from "../assets/user-page/cleaning.png";

export const SERVICES = [
  { title: "Periodic Services", imageLink: periodicServices },
  { title: "Batteries", imageLink: batteries },
  { title: "Denting And Painting", imageLink: dentingpainting2 },
  { title: "Engine Decarbonization", imageLink: Engine_Decarbonization },
  { title: "Tyres And wheels", imageLink: tyreswheels },
  { title: "Lights and Fitments", imageLink: lightsfitments },
  { title: "Cleaning", imageLink: cleaning },
];
export const USER_SIDE_NAV = [
  // {label:"Book a Service", link:'/user'},
  {label:" Service History", link:'/service-history'},
  {label:"Invoices", link:'/invoice'},
  {label:"Support/Contact Us", link:'/customer-support'}
];

export const VEHICLE_SERVICE_FORMS = [
  { placeholder: "Number Plate", name: "numberPlate", type: "text" },
  { placeholder: "Company", name: "company", type: "text" },
  { placeholder: "Model", name: "model", type: "text" },
  // { placeholder: "Service Type", name: "serviceType", type: "text" }
];

export const VEHICLE_SERVICE_TYPE = [
  { placeholder: "Number Plate", name: "numberPlate", type: "text" },
  { placeholder: "Company", name: "company", type: "text" },
  { placeholder: "Model", name: "model", type: "text" },
];

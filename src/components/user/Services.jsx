import { SERVICES } from "../../utils/UserPageContent";
import VerticalScrollBar from "../VerticalScrollBar";

const Services = ({selectService}) => {

  
  return (
    <>
    <VerticalScrollBar>
      <div className="flex gap-2 w-full py-4  ">
        {SERVICES.map((service) => {
          return (
            <div
              key={service.title}
              className="flex  flex-col flex-1 justify-between items-start gap-2 min-w-64 h-24  border-2 border-primary-800 p-2 rounded-lg cursor-pointer"  onClick={()=>selectService(service.title)}
            >
              <img
                src={service.imageLink}
                alt={service.title}
                width={36}
                className=""
              />
              <h2 className="text-wrap">{service.title}</h2>
            </div>
          );
        })}
      </div>
    </VerticalScrollBar>
   
    </>
  );
};

export default Services;




  // const[service,setService]=useState();

  // const[serviceTypes,setServiceTypes]=useState();

  // useEffect(()=>{
  //   if(service)
  //     {
  //       (async()=>{
  //           try{
  //             const result=(await fetchService(service)).data;
  //             setServiceTypes(result.services)
  //           }
  //           catch(error){
  //             console.log(error)
  //           }
  //         })()
  //     }
        
  //       console.log("Running")
  // },[service])

  // console.log(serviceTypes)

   {/* <div>
       { serviceTypes?<ServiceDescription servicess={serviceTypes}/>:"Please Select a Service"}
    </div> */}
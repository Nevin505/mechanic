import { useEffect, useState } from "react";
import { assiginTechinician, changeServiceOrderStatus, filterByType, getNewServiceOrder } from "../../apis/admin/Services";
import { fetchTechinican } from "../../apis/techinician/service";
import { dropDownFilterOptions } from "../../utils/AdminPageContent";

// Function to Format time in day/month/year time Format
const formatTime = (time) => {
  const date = new Date(time);
  const formatedTime =
    date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  return formatedTime;
};

const AssiginTask = () => {

  // to store the fetched Result
  const [serviceOrder, setServiceOrder] = useState([]);

  // to store the filtered Services based on the query Type
  const [filtereQuery, setFiltereQuery] = useState('');

  const [technicianDetails, setTechnicianDetails] = useState([]);

  // to store the selected Agents from the dropDown
  const [assignTech,setAssignTech]=useState();


  // to Fetch Techinicans
  useEffect(() => {
    const fetchTechinicians = async () => {
      const fetchTechinica = await fetchTechinican();
      setTechnicianDetails(fetchTechinica.data);
    };
    fetchTechinicians();
  }, []);

// To fetch service Order which has to be assigined
  useEffect(() => { 
    getCreatedTask();
  }, []);

  const getCreatedTask = async () => {
    const response = await getNewServiceOrder("Created");
    if (response.status === 200) {
      setServiceOrder(response.data);
      // setFilteredServices(response.data);
    }
  };
  // Filteration based on the drop down i.e based on the service type
  const filterByServiceType = async (e) => {
    const serviceType = e.target.value;
    setFiltereQuery(serviceType)
    const result = await filterByType(serviceType);
    // setFilteredServices(serviceOrder);
    setServiceOrder(result.data)
  };

  const getDropDownOptions = (params) => {
    console.log(params)
    const  upadateList= technicianDetails.filter((fetchTechinicianDetail) =>
      fetchTechinicianDetail.domain.includes(params)
    );
     upadateList.unshift({_id:"", disabled:"true",firstName:"Assigin a Techinician",domain:params})
     return upadateList;
  };

  // To bring the original Result back after Filteration Process 
  const fetchAll = () => {
    // setFilteredServices(serviceOrder);
    setFiltereQuery('')
    getCreatedTask();

  };

  const assiginTaskHandler=async(e)=>{
     setAssignTech(e.target.value)
  }

  const updateServiceTaskHandler=async(serviceOrders,serviceOrderId,serviceTaskId)=>{
    let count=0;
     if(!assignTech){
      alert("Assigin a Techinician")
     }
     else{
         console.log(serviceOrderId,serviceTaskId)
         try{
          const reqBody={serviceOrderId,serviceTaskId,techinicainId:assignTech}
            // "Created"
          console.log(serviceOrders)
          // to reset the techinician Value
          setAssignTech("")
          const result= await assiginTechinician(reqBody);
          setServiceOrder((prev=>{
          const updatedServiceOrders=[...prev];
          // To find the order Id and the Update based on the result obtained from the backend
         const updatedServiceOrderIndex= updatedServiceOrders.findIndex(updated=>updated._id===serviceOrderId);
         updatedServiceOrders[updatedServiceOrderIndex]=result.data
          return updatedServiceOrders;
         }))
// To Automatically Updated the Status of the whole Orde
         count=serviceOrders.reduce((acumulator,serviceOrder)=>{
          if(serviceOrder.serviceStatus==='Assigined'){
               return acumulator+1;
          }
          return acumulator
        },0)

         if(count===serviceOrders.length-1){
          const reqBody={serviceOrderId:serviceOrderId}
            const updatedServiceOrder= await changeServiceOrderStatus(reqBody)
            setServiceOrder(prevServicOrder=>{
              const prevupdatedServiceOrders=[...prevServicOrder];             
              return prevupdatedServiceOrders.filter((prevupdatedServiceOrder)=>prevupdatedServiceOrder._id!==updatedServiceOrder.data._id)
            })
        }
         }
         catch(error){
          console.log(error)
         }
      }
  }

  return (
    <div className="flex flex-col gap-4 max-container max-lg:w-full">
      <div className="border-2 border-primary-700 px-4 py-2 self-end">
        Sort By Service Types
        <select name="serviceType" onChange={(e) => filterByServiceType(e)}>
          {dropDownFilterOptions.map((dropDownFilterOption) => {
            return (
              <option
                disabled={dropDownFilterOption.value == " " ? true : false}
                selected={dropDownFilterOption.value == " "}
                key={dropDownFilterOption.label}
                value={dropDownFilterOption.value}
              >
                {dropDownFilterOption.label}
              </option>
            );
          })}
        </select>
      </div>

      {/* To Dipaly the list of orders */}
      <div className="flex flex-col gap-2 items-center px-4 w-full">
        {serviceOrder.length > 0 ? (
          serviceOrder?.map((showTask) => {
            return (
              <div
                key={showTask._id}
                className=" flex flex-col  gap-2  px-4 py-2  border-2  border-primary-800 rounded-xl hover:shadow-lg lg:w-1/2"
              >
                <p className="border-2 border-green-700 px-2 py-1 rounded-lg w-full">
                  <span className="font-bold">Order id </span>: # {showTask._id}
                </p>
                <div className="flex  gap-4">
                  <p>Company: {showTask.company}</p>
                  <p>Vehicle Model: {showTask.model}</p>
                  <p>Number Plate: {showTask.vehicleNumber}</p>
                  <p> Created At: {formatTime(showTask.createdAt)}</p>
                </div>
                <div className="flex flex-col">
                  {showTask.services.map((service) => {
                    return (
                      <div key={service._id}>
                        <ul key={service._id}>
                          <li>Servive Type:{service.name}</li>
                        </ul>
                        
                        {/* to show assigin option and the status  */}
                        <div className="flex justify-between">
                         { service.serviceStatus==='Created' && <div>
                          <label htmlFor="">Assigin</label>
                          <select name="techinican" id="" onChange={(e)=>assiginTaskHandler(e)}>
                            {getDropDownOptions(service.serviceType).map(
                              (user) => {
                                return (
                                  <option value={user._id} key={user._id}>
                                    {user.firstName}
                                  </option>
                                );
                              }
                            )}
                          </select>
                          </div>}
                          <p>Service Status:{service.serviceStatus}</p>
                        { service.serviceStatus==='Created'&& <button onClick={()=>updateServiceTaskHandler(showTask.services,showTask._id,service._id)}>Assigin</button>}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <p>Service Order Status:{showTask.status}</p>
              </div>
            );
          })
        ) : (
          <p>No Records Are available</p>
        )}
      </div>
      {/* {filteredServices?.length < serviceOrder.length && (
        <button onClick={fetchAll}>back</button>
      )} */}
       { filtereQuery &&  <button onClick={fetchAll}>back</button>}
    </div>
  );
};

export default AssiginTask;

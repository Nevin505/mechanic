import { useEffect, useState } from "react";
import { filterByType, getTask } from "../../apis/admin/Services";
import Dashboard from "../../components/admin/Dashboard";
import { fetchTechinican } from "../../apis/techinician/service";

// Function to Format time in day/month/year time Format
const formatTime = (time) => {
  const date = new Date(time);
  const formatedTime =
    date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  return formatedTime;
};
const dropDownFilterOptions = [
  { label: "Select your option", value: " " },
  { label: "Periodic Services", value: "Periodic Services" },
  { label: "Engine Decarbonization", value: "Engine Decarbonization" },
  { label: "Tyres And wheels", value: "Tyres And wheels" },
  { label: "Lights and Fitments", value: "Lights and Fitments" },
  { label: "Denting And Painting", value: "Denting And Painting" },
  { label: "Oil Change", value: "Oil Change" },
  { label: "Batteries", value: "Batteries" },
];

const AssiginTask = () => {

  const [showTasks, setShowTask] = useState([]);

  const [filtereTask, setFilteredTask] = useState([]);

  const [fetchTechinicianDetails, setFetchTechinicianDetails] = useState([]);


    // to Fetch Techinicans
    useEffect(()=>{
      const fetchTechinicians=async()=>{
        const fetchTechinica= await fetchTechinican();
        setFetchTechinicianDetails(fetchTechinica.data)
      }
      fetchTechinicians()
    },[])
  
    console.log(fetchTechinicianDetails)

  useEffect(() => {
    const getCreatedTask = async () => {
      const response = await getTask("Created");
      if (response.status === 200) {
        setShowTask(response.data);
        setFilteredTask(response.data)
      }
    };
    getCreatedTask();

    console.log("Rendering the use Efffect");
  }, []);

  // Filteration base on the drop down
  const filterByServiceType = async (e) => {
    const serviceType = e.target.value;
    const result = await filterByType(serviceType);
    setFilteredTask(result.data);
  };

  const getDropDownOptions=(params)=>{
     return fetchTechinicianDetails.filter(fetchTechinicianDetail=>fetchTechinicianDetail.domain.includes(params));
  }

  const fetchAll = () => {
    setFilteredTask(showTasks);
  };


  return (
    <div className="flex flex-col gap-4 max-container max-lg:w-full">
      <div className="border-2 border-primary-700 px-4 py-2 self-end">
        Sort By Service Types
        <select name="serviceType" onChange={(e) => filterByServiceType(e)}>
          {dropDownFilterOptions.map((dropDownFilterOption) => {
            return (
              <option disabled={dropDownFilterOption.value==" "?true:false}  selected={dropDownFilterOption.value==" "}
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
        {filtereTask.length > 0 ? (
          filtereTask?.map((showTask) => {
            return (
              <div
                key={showTask._id}
                className=" flex flex-col  gap-2  px-4 py-2  border-2  border-primary-800 rounded-xl hover:shadow-lg lg:w-1/2">
                <p className="border-2 border-green-700 px-2 py-1 rounded-lg w-full"><span className="font-bold">Order id </span>:  #  {showTask._id}</p>
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
                        <label htmlFor="">Assigin</label>
                        <select name="techinican" id="">
                        {getDropDownOptions(service.serviceType).map((user=>{
                         return  <option value={user._id} key={user._id}>
                          {user.firstName}
                         </option>

                        }))}
                        </select>
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
      {filtereTask.length < showTasks.length && (
        <button onClick={fetchAll}>back</button>
      )}
      {/* <Dashboard/> */}
    </div>
  );
};

export default AssiginTask;

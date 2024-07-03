import { useEffect, useState } from "react";
import { getVehiclesCount } from "../../apis/admin/Services";


import VehicleServiceSummarySkeleton from "../skeletons/VehicleServiceSummarySkeleton";

const VehicleServiceSummary = () => {

  const [vehicleServiceCounts, setVehicleServiceCounts] = useState([]);

  const[isLoading,setIsLoading]=useState(false);

  useEffect(() => {
    const getServicesCount = async () => {
        try {
        setIsLoading(true)
        const result = await getVehiclesCount();
        console.log(result)
        setVehicleServiceCounts(result.data);
        setIsLoading(false)
      }  
    catch (error) {
      alert("Something Went Wrong");
    }
    finally{
      setIsLoading(false)
    }
  }
  getServicesCount();

}, []);

  return (
    <div className="max-container items-center flex flex-col w-full ">
      {isLoading?<p className="text-red-500">Loadingggg</p> :<div className="w-3/4 min-h-20  flex  items-center  gap-4   py-2 px-4 ">
      { vehicleServiceCounts.map((vehicleServiceCount)=>{
        return <div className="flex flex-col flex-1 items-center border-2 border-white rounded-lg py-4" key={vehicleServiceCount._id}>{vehicleServiceCount?._id} Works
         <p>{vehicleServiceCount?.total}</p>
         </div>
      })} 
      </div>}
    </div>
  );
};

export default VehicleServiceSummary;

import { useEffect, useState } from "react";
import { getVehiclesCount } from "../../apis/admin/Services";

import VehicleServiceSummarySkeleton from "../skeletons/VehicleServiceSummarySkeleton";

const label = ["New Orders", "Ongoing Works", "Completed Orders"];

const VehicleServiceSummary = () => {

// To store the values from the api Call
  const [vehicleServiceCounts, setVehicleServiceCounts] = useState({Created:0,Assigined:0,Completed:0});

  const [isLoading, setIsLoading] = useState(false);

  // to map the values
  const counts=[vehicleServiceCounts.Created,vehicleServiceCounts.Assigined,vehicleServiceCounts.Completed || 0]
 
  console.log(counts)

  useEffect(() => {
    const getServicesCount = async () => {
      try {
        setIsLoading(true);
        const result = await getVehiclesCount();

        // To get the vehicle Count Completed ,Assigined and Completed Orders
        setVehicleServiceCounts(prev => {
          const newCounts = { ...prev };
          result.data.forEach(serviceCount => {
            console.log("Values inside loop");
            console.log(prev[serviceCount._id]);

            newCounts[serviceCount._id] = serviceCount.total || 0;
          });
          return newCounts;
        });
        // setIsLoading(false);
      } catch (error) {
        alert("Something Went Wrong");
      } finally {
        setIsLoading(false);
      }
    };
    getServicesCount();
  }, []);


  return (
    <div className="max-container items-center flex flex-col w-full ">
      {/* {isLoading ? (
        <p className="text-red-500">Loadingggg</p>
      ) : ( */}
        <div className="w-3/4 min-h-20  flex  items-center  gap-4   py-2 px-4 ">
          {label.map((vehicleServiceCount,index) => {
            return (
              <div  key={vehicleServiceCount}
                className="flex flex-col flex-1 items-center border-2 border-white rounded-lg py-4">
              
                {`${vehicleServiceCount} : ${counts[index]} ` } 
              </div>
            );
          })}
        </div>
      {/* )} */}
    </div>
  );
};

export default VehicleServiceSummary;

// vehicleServiceCounts.map((vehicleServiceCount)=>{
//   return <div className="flex flex-col flex-1 items-center border-2 border-white rounded-lg py-4" key={vehicleServiceCount._id}>{vehicleServiceCount?._id} Works
//    <p>{vehicleServiceCount?.total}</p>
//    </div>
// })

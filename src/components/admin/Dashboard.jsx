import { useEffect, useState } from "react";
import { fetchTechinicianDetails } from "../../apis/admin/Services";
import VehicleServiceSummary from "./VehicleServiceSummary";
import Portal from "../Portal";
import LoadingState from "../LoadingState";

const Dashboard = () => {
  const [techinicianDetails, settechinicianDetails] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTechnicianDetails = async () => {
      try {
        setIsLoading(true);
        const techinicianDetails = await fetchTechinicianDetails();
        if (techinicianDetails.status === 200) {
          settechinicianDetails(techinicianDetails.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTechnicianDetails();
  }, []);



  return (
    <div className="w-full max-container  flex flex-col items-center justify-around min-h-screen ">
      {isLoading? <p>Loadinggg</p>:<>
        <VehicleServiceSummary  />

<table className="w-3/4 bg-white">
  <thead>
    <tr  className="border-2  border-primary-700  text-center">
      <th>Name</th>
      <th>Email</th>
      <th>Domain</th>
      <th>Tickets Assigned</th>
    </tr>
  </thead>
  <tbody >
    {techinicianDetails.map((techinicianDetail) => {
      return (
        <tr
          key={techinicianDetail._id}
          className="border-2  border-primary-700  text-center"
        >
          <td className="border-2  border-primary-700">{`${techinicianDetail.firstName} ${techinicianDetail.lastName}`}</td>
          <td className="border-2  border-primary-700">{techinicianDetail.email}</td>
          <td className="border-2  border-primary-700">{techinicianDetail.domain}</td>
          <td className="border-2  border-primary-700">{techinicianDetail.ticketsAssigined}</td>
        </tr>
      );
    })}
  </tbody>
</table></>}
    </div>
  );
};

export default Dashboard;

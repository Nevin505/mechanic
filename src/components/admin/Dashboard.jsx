import { useEffect, useState } from "react";
import { fetchTechinicianDetails } from "../../apis/admin/Services";
import VehicleServiceSummary from "./VehicleServiceSummary";
import Portal from "../common/Portal";
import LoadingState from "../common/LoadingState";

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
console.log(techinicianDetails)
  return (
    <div className="w-full max-container  flex flex-col items-center justify-around min-h-screen ">
      {/* {isLoading? <p>Loadinggg</p>:<> */}
      <VehicleServiceSummary />

      <div className=" w-3/4">
        <h1 className="border-2  border-primary-700  text-center">
          Techinician Details
        </h1>
        <table className="bg-white w-full">
          <thead>
            <tr className="border-2  border-primary-700  text-center">
              <th>Name</th>
              <th>Email</th>
              <th>Domain</th>
              <th>Tickets Assigned</th>
            </tr>
          </thead>
          <tbody>
            {techinicianDetails.map((techinicianDetail) => {
              return (
                <tr
                  key={techinicianDetail._id}
                  className="border-2  border-primary-700  text-center"
                >
                  <td className="border-2  border-primary-700">{`${techinicianDetail.firstName} ${techinicianDetail.lastName}`}</td>
                  <td className="border-2  border-primary-700">
                    {techinicianDetail.email}
                  </td>
                  <td className="border-2  border-primary-700 text-start px-2">
                    {techinicianDetail.domain.map(techinDomain=>{
                      return <li className="list-disc" key={techinDomain}>{techinDomain}</li>
                    })}
                  </td>
                  <td className="border-2  border-primary-700">
                    {techinicianDetail.ticketsAssigined}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* </> */}
      {/* // } */}
    </div>
  );
};

export default Dashboard;

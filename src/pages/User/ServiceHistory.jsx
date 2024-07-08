import { useEffect, useState } from "react";
import { serviceHistory } from "../../apis/user/Services";

const ServiceHistory = () => {
  const [serviceOrders, setServiceOrder] = useState([]);

  useEffect(() => {
    const authToken = sessionStorage.getItem("token");
    const reqHeaders = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };

    const fetchUserServiceOrders = async () => {
      const result = await serviceHistory(reqHeaders);
      setServiceOrder(result.data);
      console.log(result);
    };
    fetchUserServiceOrders();
  }, []);

  return (
    <div className="flex flex-col gap-8 max-container w-full items-center py-8" >
      {serviceOrders.map((serviceOrder) => {
        return (
          <div className="flex flex-col w-3/4 px-8 py-2  border-2 border-gray-600 rounded-lg " key={serviceOrder._id}>
            <p className="text-gray-600 border-b-2 border-gray-800 w-fit px-2">Service Id :# {serviceOrder._id}</p>
            <div className="flex gap-2 justify-between ">
              <p>Model : { serviceOrder.model}</p>
              <p>Company : { serviceOrder.company}</p>
              <p>Model : {serviceOrder.status}</p>
              <p>Status : {serviceOrder.status}</p>
            </div>

              <div >
              Services:
              {serviceOrder.services.map((serviceType) => {
                return <ul key={serviceType._id}>
                  <li className="list-disc">{serviceType.name}</li>
          
                </ul>
              })}
              </div>

          </div>
        );
      })}
    </div>
  );
};

export default ServiceHistory;

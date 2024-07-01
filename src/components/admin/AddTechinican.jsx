import { useState } from "react";

import Input from "../Input";

import { TECHNICAN_REGISTRATION_FORM } from "../../utils/AdminPageContent";
import { valiadateInputs } from "../../utils/FormValidation";
import Button from "../Button";
import { addTechinican } from "../../apis/admin/Services";

const AddTechinican = () => {
  const [errors, setErrors] = useState();

  const errorHandler = (formErrors) => {
    setErrors(formErrors);
  };

  const addTechnician = async(event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const experiance = formData.get("experiance");
    const domain = formData.get("domain");
    const password = formData.get("password");
    const phoneNumber = formData.get("phoneNumber");

  
    const validateKeys = { firstName, lastName, email, experiance, domain ,password,phoneNumber};
    
    const valiadte = valiadateInputs(errorHandler, validateKeys);
    if (valiadte) {
      try {
        const requestObject={ firstName, lastName, email, experiance, domain ,password,phoneNumber}
          const response = await addTechinican(requestObject);
          if(response.status===201)
          console.log("response",response)
      } catch (error) {
        console.log(error)
        alert("Something went Wrong");
      }
    } else {
      alert("Errors");
    }
  };
  return (
    <div className="flex flex-col max-conatiner items-center mt-8">
      <form
        className="flex flex-wrap gap-4 items-center justify-between w-[36rem] h-full bg-primary-800 p-8 rounded-xl max-lg:w-80"
        onSubmit={(e) => addTechnician(e)}
      >
        {TECHNICAN_REGISTRATION_FORM.map((VehicleServiceform) => {
          return (
            <div
              className="flex  items-center  relative py-2 min-w-12"
              key={VehicleServiceform.name}
            >
              <Input
                type={VehicleServiceform.type}
                placeholder={VehicleServiceform.placeholder}
                name={VehicleServiceform.name}
              />
              {errors?.[VehicleServiceform.name] && (
                <p className="absolute -bottom-3 text-red-500 font-semibold">
                  {errors[VehicleServiceform.name]}
                </p>
              )}
            </div>
          );
        })}
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default AddTechinican;

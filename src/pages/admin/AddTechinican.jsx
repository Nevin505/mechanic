import { useState } from "react";

import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

import { TECHNICAN_DOMAIN, TECHNICAN_REGISTRATION_FORM } from "../../utils/AdminPageContent";
import { valiadateInputs } from "../../utils/FormValidation";
import { addTechinican } from "../../apis/admin/Services";
import MultipleSelectDropdownTag from "../../components/common/MultipleSelectDropdownTag";
import { toast, ToastContainer } from "react-toastify";

const AddTechinican = () => {
  const [errors, setErrors] = useState();
  
  // to use a state to add multiple drop down values
  const[selectedDropdownValues,setSelectedDropdownValues]=useState(["Periodic Services","Cleaning"])

  // To Add DropDown Values
  const dropdownValues=(e)=>{
    setSelectedDropdownValues(prev=>{
      const newDropdownValues=[...prev];
      console.log(e.target.value)
      if(!(newDropdownValues.includes(e.target.value))){
        console.log(newDropdownValues)
        
        newDropdownValues.push(e.target.value)
      }
     return newDropdownValues;

    })
  }
console.log(selectedDropdownValues)
// to remove drop down values while on clicking the selectable paragraph
  const removeSelectedDropValues=(selectedDropdownValue)=>{
    console.log(selectedDropdownValue)
    setSelectedDropdownValues(prevValues=>{
      const updatedValues=[...prevValues];
      return updatedValues.filter(prevValue=>{
       return prevValue!=selectedDropdownValue
      })
     })
  }
  

  const errorHandler = (formErrors) => {
    setErrors(formErrors);
  };

  const addTechnician = async(event) => {
    event.preventDefault();
    
    // To get the input values from the Register Form using Form Data
    const inputFieldValues={}

    const formData = new FormData(event.target);

    TECHNICAN_REGISTRATION_FORM.forEach(TECHNICAN_REGISTRATION_FORM_FIELD=>{
      inputFieldValues[TECHNICAN_REGISTRATION_FORM_FIELD.name]=formData.get(TECHNICAN_REGISTRATION_FORM_FIELD.name)
    })

//   To Perfrom Validation Only Checking if the value associated with the input field is empty or not
    const valiadte = valiadateInputs(errorHandler, inputFieldValues);

    // if not then sending the request to the backend to create a new Techinician
    if (valiadte) {
      try {
        const requestObject={ ...inputFieldValues , domain:selectedDropdownValues}
          const response = await addTechinican(requestObject);
          if(response.status===201){
            toast.success("Created")
            setSelectedDropdownValues(["Periodic Services","Cleaning"])
            console.log("response",response)
          }      
      } catch (error) {
        console.log(error)
        alert("Something went Wrong");
      }
    } else {
      alert("Errors");
    }
  };
  return (
    <div className=" flex flex-col items-center bg-gradient-to-r  from-primary-400  max-container to-primary-800  min-h-screen ">
       <div className="flex flex-col  items-center pt-8 w-[36rem]">
      <h1 className="text-center ">Technician Register Form</h1>
      <form
        className="flex flex-wrap gap-4 items-center justify-center w-[36rem]  border-2 border-white p-8 rounded-xl max-lg:w-80 "
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
                <p className="absolute left-0 right-0 text-center -bottom-4 text-red-500 font-semibold">
                   <span className=" w-full"> {errors[VehicleServiceform.name]}</span>
                </p>
              )}
            </div>
          );
        })}

      {/* Multiple DropDown Values  to enter their Domain*/}
        <MultipleSelectDropdownTag dropdownOptions={TECHNICAN_DOMAIN} removeSelectedDropValues={removeSelectedDropValues} dropdownValues={dropdownValues} selectedDropdownValues={selectedDropdownValues}/>
        <Button>Submit</Button>

      </form>
    </div>
    <ToastContainer position='top-center'/>
    </div>
  );
};

export default AddTechinican;

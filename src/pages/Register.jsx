import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/common/Button";
import Input from "../components/common/Input";
import RadioButton from "../components/common/RadioButton";

import {registerUser } from "../apis/auth";
import { valiadateInputs } from "../utils/FormValidation";

const inputFields = [
  { placeholder: "First Name", name: "firstName", type: "text" },
  { placeholder: "Last Name", name: "lastName", type: "text" },
  { placeholder: "Phone Number", name: "phoneNumber", type: "number" },
  { placeholder: "Email", name: "email", type: "email" },
  { placeholder: "Password", name: "password", type: "password" },
];

const Register = () => {
  const [errors, setErrors] = useState();
  const navigate = useNavigate();


  const errorHandler=(formErrors)=>{
    setErrors(formErrors)
  }

  const registerHandler = async(e) => {
    e.preventDefault();

    // Using FormData to get Values from the form 
    const formData = new FormData(e.target);

    const role = formData.get("role");
  
    const inputValues={};
// to get the values from the form using formData method  like this {eg: const firstName = formData.get("firstName")} ;
    inputFields.map(inputField=>{
      inputValues[inputField.name]=formData.get(inputField.name)
    })

    inputValues.role=role


    const validate=valiadateInputs(errorHandler,inputValues)

    if (validate) {
      try {
        // Api to register User
        console.log(inputValues)
        const response=await registerUser(inputValues);
        console.log("response",response)
        console.log(response);
        if (response.status === 201) {
          alert("Profile Created");
          navigate("/");
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
    <section className="max-container flex flex-col items-center bg-primary-900 h-screen  ">
      <form
        className="flex flex-col items-center  w-1/2 p-2 gap-4  bg-violet-300 opacity-80  rounded-lg mt-8"
        onSubmit={(e) => registerHandler(e)}
      >
        <h1>Register</h1>

        {/* Mapping the input tags */}
        {inputFields.map((inputfield) => (
          <div
            className="flex flex-col gap-1 items-center"
            key={inputfield.name}
          >
            <Input
              type={inputfield.type}
              placeholder={inputfield.placeholder}
              name={inputfield.name}
            />
            {errors?.[inputfield.name] && (
              <p className="text-red-500 font-semibold">
                {errors[inputfield.name]}
              </p>
            )}
          </div>
        ))}

        <div className="flex  flex-col gap-1  items-center">
          <div className="flex gap-2">
            {/* Neeed  */}
            Role :
            <RadioButton
              type="radio"
              placeholder="Role"
              name="role"
              value="User"
            />
            <RadioButton
              type="radio"
              placeholder="Role"
              name="role"
              value="Admin"
            />
          </div>
          {errors?.role && (
            <p className="text-red-500 font-semibold">{errors.role}</p>
          )}
        </div>
        <Button>Submit</Button>
      </form>
    </section>
  );
};

export default Register;

    // const firstName = formData.get("firstName");
    // const lastName = formData.get("lastName");
    // const phoneNumber = formData.get("phoneNumber");
    // const email = formData.get("email");
    // const password = formData.get("password");


      //  const validateKeys={ firstName,lastName,phoneNumber,email,password,role}

  // const validateKeys=inputValues

    // const valiadte = valiadateInputs(errorHandler,validateKeys);
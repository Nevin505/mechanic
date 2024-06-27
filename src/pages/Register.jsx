import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import Input from "../components/Input";
import RadioButton from "../components/RadioButton";

import { postUser } from "../apis/auth";

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

  const registerHandler = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const phoneNumber = formData.get("phoneNumber");
    const email = formData.get("email");
    const password = formData.get("password");
    const role = formData.get("role");

    const valiadte = valiadateInputs({
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      role,
    });

    if (valiadte) {
      alert("No Errors");
      try {
        const response = await postUser({
          firstName,
          lastName,
          email,
          password,
          phoneNumber,
          role,
        });
        console.log(response);
        if (response.status === 201) {
          alert("Profile Created");
          navigate("/");
        }
      } catch (error) {
        alert("Something went Wrong");
      }
    } else {
      alert("Errors");
    }
  };

  const valiadateInputs = ({ ...validateElements }) => {
    const error = {};
    Object.keys(validateElements).forEach((validateElement) => {
      if (!validateElements[validateElement]) {
        error[validateElement] = validateElement + " is mising";
      }
    });
    if (Object.keys(error).length > 0) {
      setErrors(error);
      return false;
    } else {
      setErrors("");
      return true;
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

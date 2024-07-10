const validationMessages = {
  firstName: "First name must contain only alphabetic characters.",
  lastName: "Last name must contain only alphabetic characters.",
  phoneNumber: "Phone number must be a 10-digit number starting with digits 6-9.",
  email: "Email must be in the format example@example.com.",
  password: "Password must be at least 8 characters long, containing at least one letter, one number, and one special character."
};

export const valiadateInputs = (errorHandler,validateElements) => {
    const error = {};
    console.log({...validateElements})
    console.log(  Object.keys(validateElements));
    Object.keys(validateElements).forEach((validateElement) => {
      if (!validateElements[validateElement] ) {
        error[validateElement] = validateElement + " is mising";
      }
      // else if(!(regexPattern[validateElement].test(validateElements[validateElement]))) {
      //   // error.push(validateElement)
      //   error[validateElement] =validationMessages[validateElement];

      // }
    });
    if (Object.keys(error).length > 0) {
      errorHandler(error);
      console.log(error)
      return false;
    } else {
      errorHandler("");
      return true;
    }
  };

  const regexPattern = 
    { firstName:/^[A-Za-z]+$/,lastName:/^[A-Za-z]+$/ ,phoneNumber:/^[6-9]\d{9}$/,
email:/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,password:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ }
  

  
  // export const regexPatternValidation=(field)=>{
  //   const regexPatterValidationErrors=[]
  //   console.log({...field})
  //   console.log(  Object.keys(field));
  //   Object.keys(field).forEach((validateElement) => {
  //     if (!(regexPattern[validateElement].test(field[validateElement]))) {
  //       regexPatterValidationErrors.push(validateElement)
  //     }
  //   });
  //  const errorMessages= regexPatterValidationErrors.map(regexPatterValidationError=>{
  //     return {regexPatterValidationErrors:validationMessages[regexPatterValidationError]}
  //   })
  //  return errorMessages.length===0?true:false;
  // }
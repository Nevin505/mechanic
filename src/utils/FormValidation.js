export const valiadateInputs = (errorHandler,validateElements) => {
    const error = {};
    console.log({...validateElements})
    console.log(  Object.keys(validateElements));
    Object.keys(validateElements).forEach((validateElement) => {
      if (!validateElements[validateElement]) {
        error[validateElement] = validateElement + " is mising";
      }
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
import Validator from "validator";

export default function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.title)) {
    errors.title = "This field is required";
  }

  return {
    errors,
    isValid: !Object.keys(errors).length
  };
}

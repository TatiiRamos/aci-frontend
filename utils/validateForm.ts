// import { Inputs } from "../types/interfaceRegisterInputs";

// const validate = (input: Inputs) => {
//   const errors = {
//     requiredError: false,
//     firstName: false,
//     lastName: false,
//     email: false,
//     password: false,
//   };
//   const ExpRegName = "^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";
//   const ExpRegEmail =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   const ExpRegPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
//   const { country, email, firstName, lastName, password } = input;

//   if (!country || !email || !firstName || !lastName || !password)
//     errors.requiredError = true;
//   else errors.requiredError = false;

//   if (!firstName.match(ExpRegName)) errors.firstName = true;
//   else errors.firstName = false;

//   if (!lastName.match(ExpRegName)) errors.lastName = true;
//   else errors.lastName = false;

//   if (!email.match(ExpRegEmail)) errors.email = true;
//   else errors.email = false;

//   if (!password.match(ExpRegPassword)) errors.password = true;
//   else errors.password = false;

//   return errors;
// };

// export default validate;

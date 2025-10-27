// import { useReducer } from "react";
// import { Inputs } from "../types/interfaceRegisterInputs";
// interface FormState {
//   inputState: Inputs;
// }
// const INITIAL_STATE: Inputs = {
//   country: "",
//   email: "",
//   firstName: "",
//   lastName: "",
//   password: "",
// };
// type FormReducerAction =
//   | {
//       type: "CHANGE_VALUE";
//       payload: { inputName: string; inputValue: string };
//     }
//   | { type: "CLEAR" };

// const formReducer = (
//   state: FormState["inputState"],
//   action: FormReducerAction,
// ) => {
//   switch (action.type) {
//     case "CHANGE_VALUE":
//       const { inputName, inputValue } = action.payload;
//       return { ...state, [inputName]: inputValue };
//     case "CLEAR":
//       return INITIAL_STATE;
//   }
// };
// const useFormRegister = () => {
//   return useReducer(formReducer, INITIAL_STATE);
// };
// export default useFormRegister;



//const RegisterPage = () => {
 // return (
  //  <div>RegisterPage</div>
 // )
//}

//export default RegisterPage

import React from "react";
import RegisterForm from "../features/Register/RegisterForm";

const RegisterPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;

import React, { useState } from "react";
import Form from "../components/Form";

const SignUp = () => {
  const [userData, setUserData] = useState({
    email: "",
    Password: null,
  });
  return (
    <React.Fragment>
      <Form userData={userData} setUserData={setUserData} />
    </React.Fragment>
  );
};

export default SignUp;

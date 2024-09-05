import React, { useState } from "react";
import Form from "../components/Form";

const SignIn = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    Password: null,
  });

  return (
    <React.Fragment>
      <Form title={"SignIn"} userData={userData} setUserData={setUserData} />
    </React.Fragment>
  );
};

export default SignIn;

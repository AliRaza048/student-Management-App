import React, { useState } from "react";
import Form from "../components/Form";

const SignIn = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <React.Fragment>
      <Form title={"SignIn"} userData={userData} setUserData={setUserData} />
    </React.Fragment>
  );
};

export default SignIn;

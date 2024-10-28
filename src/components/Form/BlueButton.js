import React from "react";
import { Button } from "@mui/material";

const BlueButton = ({ title, icon, handleSubmit }) => {
  return (
    <div className="w-full flex justify-center mb-2">
      <Button className="overview__button">{title}</Button>
    </div>
  );
};

export default BlueButton;

import React from "react";

const Form = () => {
    return(
        <React.Fragment>
        <ul className="flex items-center gap-3 p-4">
        <img
          src={require("../../../assets/download.png")}
          className="w-12 cursor-pointer"
        />
        <h1 className="text-4xl font-semibold">DNX</h1>
      </ul>
      </React.Fragment>
    )
}

export default Form
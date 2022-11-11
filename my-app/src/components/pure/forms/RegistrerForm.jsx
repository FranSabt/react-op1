import React, { useState } from "react";

const RegistrerForm = () => {
  const intialData = [
    {
      user: "",
      name: "",
      password: "",
      email: "",
    },
  ];

  const [data, setData] = useState(intialData);

  return <div>Loginform</div>;
};

export default RegistrerForm;

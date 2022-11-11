/*
 * Va a contener un formulario para autenticacion de usuarios
 */

import React, { useState } from "react";

const Loginform = () => {
  const intialCredentials = [
    {
      user: "",
      password: "",
    },
  ];

  const [credentials, setCredentials] = useState(intialCredentials);

  return <div>Loginform</div>;
};

export default Loginform;

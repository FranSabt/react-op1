import React from "react";
import { useState, useEffect } from "react";

const CloclFuncioional = () => {

  const [clock, setClock] = useState({
    fecha: new Date(),
    edad: 0,
    nombre: "Martin",
    apellidos: "San Jose",
  });

  useEffect(() => {
		let edad =  clock.edad + 1
    const timer = setInterval(() => {
			setClock({
				...clock,
        fecha: new Date(),
        edad:edad,
      })
		}, 1000);
		return () => clearInterval(timer)
  });

  return (
    <div>
			Hola Mundos
      <h2>
        Hora Actual:
        {clock.fecha.toLocaleTimeString()}
      </h2>
      <h3>
				Nombres:
        {clock.nombre} {clock.apellidos}
			</h3>
      <h1>Edad: {clock.edad}</h1> 
    </div>
  );
};

export default CloclFuncioional;

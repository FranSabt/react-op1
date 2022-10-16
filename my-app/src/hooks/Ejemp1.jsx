/*
    * Ejemplo de useState
*/
/*
*Crear un componente de tipo y funcion y acceder a su estado privado a traves de un hook, y  ademas, modificarlo
*/

import React, { useState } from 'react'

const Ejemp1 = () => {
  // valor inicial para un count
  const valor = 0;

  // valor inicial para person
  const personInit = {
    nombre: "lagata",
    email: 'lagata@gato.com'
  }

  /*
  Queremos que valory persona inicial sean parte del estado incial del componente y que este sea reflejado en la vista del componente
  */

  const [count, setCount] = useState(valor);
  const [persona, setPersona] = useState(personInit);

  const countPlus = () => {
    setCount( count + 1);
  }

  const countRest = () => {
    setCount(count > 0 ? count - 1: 0);
  }

  const actualizePerson = () => {
    setPersona({
      nombre: 'Pepe',
      email: 'pepe@gmail.com'
    })
  }
  return (
    <div>
      <div>PERSONA: {persona.nombre}</div>
      <div>EMAIl: {persona.email}</div>
      <button onClick={actualizePerson}>Actulize Person</button>
      <br/>
      <div>CONTADOR: {count}</div>
      <button onClick={countPlus}> + </button><button onClick={countRest}> - </button>
    </div>
  )
}

export default Ejemp1
import React from 'react'
import { useState } from 'react';

export const FGreeting = (props) => {

  const [num, setNum] = useState(0);

const aument = () => {
  // * auctualiza el estado  
  setNum(num + 1)
}

	const name = 'mi mami'
  const frase = 'yo quiero mucho a'
  return (
    <div>
        <h1>HOLAAAAAA ENFERMERA!</h1>
        <p>{frase} {name}</p>
        <p> {props.gata}</p>
        <p> {num}</p>
        <button type="button" onClick={aument}> + </button>
      </div>
  )
}

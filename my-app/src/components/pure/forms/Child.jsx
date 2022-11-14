import React from 'react'
import { useRef } from 'react'

export const Child = ({ func }) => {

    const mssgRef = useRef('')

    const pressBtn = () => {
        alert(`Text: Hola mundo`)

    }

    const pressBtnParam = (txt) => {
        alert(`Text: ${txt}`)
    }

  return (
    <div>
        <h3>Start Child</h3>
        <p onMouseOver={() => console.log('on Mouse')}>
        Child Component
        </p>
        <button onClick={() => console.log('Click1')}> 1 </button>
        <button onClick={() => console.log('Click2')}> 2 </button>
        <button onClick={pressBtn}> 3 </button>
        <button onClick={() => pressBtnParam('Hello')}> 4 </button>
        <input ref={mssgRef} onChange={(e) => e.target.value}></input>
        <button onClick={() => func(mssgRef.current.value)}> - X - </button>
        <h3>End Child</h3>
    </div>
  )
}

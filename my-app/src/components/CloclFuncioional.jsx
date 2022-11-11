import React from 'react'
import { setState, useEffect } from react

const CloclFuncioional = () => {

    const [clock, setClock] = setState({
        fecha: new Date(),
        edad: 0,
        nombre: 'Martin',
        apellidos: 'San Jose'
    })


    useEffect(() => {
        setInterval(
            setClock({
                ...clock,
                fecha: new Date(),
                edad: edad++
            })
        ), 1000
    })


        return (
           <div>
           <h2>
           Hora Actual:
           {this.state.fecha.toLocaleTimeString()}
           </h2>
           <h3>{clock.nombre} {clock.apellidos}</h3>
           <h1>Edad: {clock.edad}</h1>
           </div>
        )
     }



export default CloclFuncioional
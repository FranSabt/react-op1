/*
? Entender el uso de props.children
*/

import React from 'react'

const Ejempl4 = (props) => {
  return (
    <div>
    <h1>*** children Props ***</h1>
    <h2>
        Nombre: {props.name}
    </h2>
    {/* props.childre renderiza por defecto aquello que se encuentre entre las tags de apertura y cierre de este componente desde el componente de orden superios */}
    {props.children}
    </div>
  )
}

export default Ejempl4
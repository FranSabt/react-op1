/*
*Ejemplo de uso de metodo de DidUpdate en CLass y Func
*/

import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

  componentDidUpdate() {
    console.log('DidUpdate: Comportamiento cuando el componente recibe nuevos props o cambia su estado privado - CLASS');
  }

  render() {
    return (
      <div>DidUpdate</div>
    )
  }
}

export const DidUpdateHook = () => {

  useEffect(() => {
    console.log('DidUpdate Comportamiento cuando el componente recibe nuevos props o cambia su estado privado - HOOK');
    
  }); //? --> sin dependencia

    return (

        <div>DidUpdateHook</div>
    )
}
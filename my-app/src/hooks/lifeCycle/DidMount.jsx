/*

*Ejemplo de uso de metodo de ciclo de vida encomponente de CLASE y FUC*/

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {
    componentDidMount(){
        console.log('Comportamiento antes de que el componente sea añadido al DOM, CLASS');
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}




export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM, HOOK');
    }, []) //?--> dependecia vacia -> ejecuta una vez

  return (
    <div>
        <h1>DidMount</h1>
    </div>
  )
}


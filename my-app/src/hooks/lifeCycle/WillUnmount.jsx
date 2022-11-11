/*
*Uso del metodo ComponentWillUnmount para clase y hook para el funcional
*/

import React, { Component, useEffect } from 'react';

export class WillUnmount extends Component {

    componentWillUnmount() {
        console.log('Compotamiento antes de que el componente desaparesca');
    }

    render() {
        return (
            <div>
                <h1>
                    ComponentWillUnmount
                </h1>
            </div>
        );
    }
}


export const WillUnmountHook = () => {
    
    useEffect(() => {
        // aqui no ponemos nada
        return () => {
            console.log('Compotamiento antes de que el componente desaparesca');
        }
    }, []) // -> que se ejecute una vez

    return(
        <div>

        </div>
    )
}
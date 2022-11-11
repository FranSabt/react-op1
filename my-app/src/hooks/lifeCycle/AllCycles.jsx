import React, { useEffect } from 'react'

function AllCycles() {

    useEffect(() => {
        console.log('Componente actualizado');

        const interval = setInterval(() => {
            document.title = `${new Date()}`
            console.log('acutalizacion de componente');
        }, 1000);

        return () => {
            console.log('Componente va a desaparecer');
            document.title = 'Tiempo Detenido';
            clearInterval(interval);
        }
    }, []);

  return (
    <div>AllCycles</div>
  )
}

export default AllCycles
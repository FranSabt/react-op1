/*
 * useState
 * useContext
 */

import React, { useState, useContext } from "react";

/*
    ? return Componente1
    * Dispone de un contexto que va a tener un valor que recibe desde el padre
*/


//* Inicializamos un stado vacio que va a rellenarce con el padre
const miContexto = React.createContext(null);

const Componente1 = () => {

  const state = useContext(miContexto);

  return (
    <div>
      {/* //Queremos transmitir info si props, haciend udo del contecto. */}
      <h1>El Token es: {state.token} </h1> {/* //el padre pasa el token */}
      {/* pintamos el componente2 */}
      <Componente2 />
    </div>
  );
};

const Componente2 = () => {
  const state = useContext(miContexto);

  return (
    <div>
      <h2>La sesion es: {state.sesion}</h2>
    </div>
  );
};

const ComponenteConContexto = () => {
  const initState = {
    token: "12345",
    sesion: 1,
  };

  // *estado del componente
  const [sessionData, setSessionData] = useState(initState);

  const actualizeSession = () => {
    setSessionData(
      {
        token: "l@Gata",
        sesion: sessionData.sesion + 1,
      }
    )
  }

  return (
    <miContexto.Provider value={sessionData}>
    {/* // Todo lo que este adentro puede leer los datos de sessionData ademas de actualizarse
    // Ademas si se actualizan los Componente1, tambien este es actualizados */}
    <Componente1/>
    <button onClick={actualizeSession}>Actualizar sesion</button>
    </miContexto.Provider>
  );
};

export default ComponenteConContexto;

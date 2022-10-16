/*
* - useState()
* - useRef()  -> identificar/referencias valores/ elemntos dentro de la vista
* - useEffect() -> controlar cambios en la vista - ciclo de vida
*/

import React, {useState, useRef, useEffect} from 'react'

const Ejemp2 = () => {
	
	//vamos a crear 2 contadors
	// cada uno con un estado distinto

	const [contador1, setContador1] = useState(0)
	const [contador2, setContador2] = useState(0)

	// Vamos a crear una referencia con useRef() para asociar un elemento del DOM de componente (vista HTML)

	const miRef = useRef();

	const count1 = () => {
		setContador1(contador1 + 1);
  }

	const count2 = () => {
		setContador2(contador2 + 1);
  }

	/*
	*Usando useEffect
	? cas0 1: Ejecutar siempre un snippet de codigo
	* Cada vez que haya un cambio en el estado de componente se  ejecuta aquello que este dentro del useEffect
	*/

	// useEffect(() => {
	// 	console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
	// 	console.log('Monstrado Referecia a elemento del DOM');
	// 	console.log(miRef);
	// })
//! useEffect sin dependecia -> se ejecuta siempre que haya cambios

	/*
	? caso 2: Ejecutar solo: CUANDO CAMBIE EL COTNADOR
	* Cada vez que haya un cambio en contador 1, se ejecuta  loque diga useEffect
	* Si contador 2, no habra ejecucion
	*/

	useEffect(() => {
		console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
		console.log('Monstrado Referecia a elemento del DOM');
		console.log(miRef);
	},[contador1])
//! useEffect con dependecia -> se  ejecuta cuando hay un cambio en el elemneto dentro de la dependencia

/*

*/
useEffect(() => {
	console.log('SE EJECUTO 1 VEZ CON DEPENDECIA VACIA');
	console.log(miRef);
},[])
//! useEffect con dependecia vacia -> se ejecuta solocuando carga el componente


  return (
		<div>
    <div>*** useState(),useRef() y useEffect() ***</div>
		<h2>CONTADOR 1: {contador1}</h2>
		<h2>CONTADOR 2: {contador2}</h2>
		{/* Elemento referenciado */}
		<h4 ref={miRef}> Ejemplo de elemento refereciado</h4>
		{/* Botones de contadores */}
		<button onClick={count1}> + 1</button>
		<button onClick={count2}> + 2</button>
		</div>

  )
}

export default Ejemp2
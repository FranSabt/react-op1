/*
*Ejemplo de componente de tipo clase qie dispone de los metodos de ciclo de vida
*/

import React from 'react'
import { PropsTypes } from 'prop-types'
import { Component } from 'react/cjs/react.production.min';

export default class lifeCycleExample extends Component {

  constructor(props) {
    super(props)
    console.log('CONSTRUCTOR: Cuando se inancia el componente'); // los constructores estan pensados para la incializacion de variables
  }

  componentWillMount(){
    console.log('WILLMOUNT: antes del montaje del componente');
  }

  componentDidMount() {
    console.log('DIDMOUNT: Justo ates del montaje del componente y antes de renderizalro');
  }

  componentWillReceiveProps(nextProps){
    console.log('Si va a recibir nuevas props');
  }

  shouldComponentUpdate(nextProps, nextState) {
    //devuelve bool -> 
    //!controla si el componente se debe actualizar
    //return true/false
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('WillUpdate:  antes de actualizarse');
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('WillDidupdate:  despues de actualizarse');
  }

  componentWillUnmount()  {
    console.log('Unmount: ante de dessaparecer');
  }

  render() {
    return 
  }
}

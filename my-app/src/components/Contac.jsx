import React from 'react'
import PropTypes from 'prop-types'
import { contactClass } from '../models/contactClass'

const Contac = ({ contact }) => {
  return (
    <div>
      <h2>Nombre: { contact.name }</h2>
      <h3>Apellido: { contact.apellido }</h3>
      <h4>Email: { contact.email }</h4>
      <h5>
        Conectado: { contact.conectado ?  'Online' : 'Offline'}
      </h5>
    </div>
  )
}

Contac.propTypes = {
  contact: PropTypes.instanceOf(contactClass)
}

export default Contac
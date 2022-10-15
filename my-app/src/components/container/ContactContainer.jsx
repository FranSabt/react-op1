import React from 'react'
import Contac from '../Contac';
import { contactClass } from '../../models/contactClass'

const ContactContainer = () => {

  const contacDefault = new contactClass('Comino', 'Lagata', 'gata@chats.com', true);

  return (
    <div>
      <Contac contact={contacDefault}/>
    </div>
  )
}

export default ContactContainer
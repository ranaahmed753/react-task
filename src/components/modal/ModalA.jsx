/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ModalA = ({ isModalAOpen, closeModalA }) => {
  const [contacts, setContacts] = useState([])
  const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000,
    borderRadius: 20
  }
  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    zIndex: 1000,
    cursor: 'pointer',

  }
  // eslint-disable-next-line no-undef
  useEffect(() => {
    const response = fetch('https://contact.mediusware.com/api/contacts/');
    // const data = response.json()
    //setContacts(data.results);
  }, [])

  return isModalAOpen ? (
    <div style={OVERLAY_STYLES}>
      <div style={MODAL_STYLES}>
        <h3>Modal A</h3>
        <button onClick={closeModalA}>Close</button>
        {contacts && contacts.map(contact => (
          <div key={result.id}>
            <h4>{contact.phone}</h4>
            <h4>{contact.country}</h4>
          </div>
        ))}
      </div>
    </div>

  ) : null


}

export default ModalA
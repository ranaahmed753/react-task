/* eslint-disable no-undef */
import React from 'react'

const ModalA = ({ isModalAOpen, closeModalA, contacts }) => {
  const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000,
    borderRadius: 20,
    overflow: scrollY,
    cursor: 'pointer'
  }
  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    zIndex: 1000,

  }

  return isModalAOpen ? (
    <div style={OVERLAY_STYLES}>
      <div style={MODAL_STYLES}>
        <h3>Modal A</h3>
        <button onClick={closeModalA}>Close</button>
        {contacts.map(contact => (
          <div key={contact.id}>
            <h4>{contact.phone}</h4>
            <h4>{contact.country.name}</h4>
          </div>
        ))}
      </div>
    </div>

  ) : null


}

export default ModalA
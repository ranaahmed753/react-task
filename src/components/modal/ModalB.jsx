import React from 'react'

const ModalB = ({ isModalBOpen, closeModalB, countryContacts }) => {
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
    cursor: 'pointer'
  }
  // eslint-disable-next-line no-undef


  return isModalBOpen ? (
    <div style={OVERLAY_STYLES}>
      <div style={MODAL_STYLES}>
        <h3>Modal B</h3>
        <button onClick={closeModalB}>Close</button>
        {
          countryContacts.map(contact => (
            <div>
              <h3>{contact.phone}</h3>
              <h3>{contact.country.name}</h3>
            </div>
          ))
        }
      </div>
    </div>

  ) : null
}

export default ModalB
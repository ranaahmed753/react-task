import React, { useState, useEffect } from 'react';
import ModalA from './modal/ModalA';
import ModalB from './modal/ModalB';

const Problem2 = () => {
    const [isModalAOpen, setIsModalAOpen] = useState(false);
    const [isModalBOpen, setIsModalBOpen] = useState(false);
    const [isOnlyEvenChecked, setIsOnlyEvenChecked] = useState(false);
    const [contacts, setContacts] = useState([])
    const [countryContacts, setCountryContacts] = useState([])

    useEffect(() => {
        fetchContacts()
        fetchContactsByCountryName()
    }, [])

    const fetchContacts = () => {
        fetch('https://contact.mediusware.com/api/contacts/')
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results)
                setContacts(data.results)
            })
    }

    const fetchContactsByCountryName = () => {
        fetch('https://contact.mediusware.com/api/country-contacts/united%20states/?fbclid=IwAR2UB8EOMu09OEYUNzfkpEJ2KEeTEsdVTTtpoHnoeyLcN8_pvyyBNaosZAc')
            .then((response) => response.json())
            .then((data) => {
                setCountryContacts(data.results)
            })

    }
    const openModalA = () => {
        setIsModalAOpen(true)
    }

    const closeModalA = () => {
        setIsModalAOpen(false)
    }

    const openModalB = () => {
        setIsModalBOpen(true)
    }

    const closeModalB = () => {
        setIsModalBOpen(false)
    }
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" onClick={openModalA}>All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button" onClick={openModalB}>US Contacts</button>
                </div>
                <ModalA isModalAOpen={isModalAOpen} closeModalA={closeModalA} contacts={contacts} />
                <ModalB isModalBOpen={isModalBOpen} closeModalB={closeModalB} countryContacts={countryContacts} />
            </div>
        </div>
    );
};

export default Problem2;
import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '111-111-1111',
        type: 'personal'
      },
      {
        name: 'john Johnson',
        email: 'john@gmail.com',
        phone: '111-111-1111',
        type: 'personal'
      },
      {
        name: 'jake Johnson',
        email: 'jake@gmail.com',
        phone: '111-111-1111',
        type: 'proffessional'
      }
    ]
    };
    const [state, dispatch] = useReducer(ContactReducer, initialState);
    //Add Contact 

    //Delete Contact

    //Set Current Contact

    //Clear Current Contact
    
    //Update Contact

    //Filter Contacts

    //ClearFilter

    return ( 
        <ContactContext.Provider value={{
            contacts: state.contacts
        }}>
            {props.children}
        </ContactContext.Provider>
    )
};


export default ContactState
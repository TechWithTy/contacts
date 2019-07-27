import React, { useReducer } from 'react';
import uuid from 'uuid';
import {
  ADD_CONTACT,
  CLEAR_CURRENT,
  DELETE_CONTACT,
  SET_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        name: 'Jill Johnson',
        id: '1000',
        email: 'jill@gmail.com',
        phone: '111-111-1111',
        type: 'Personal'
      },
      {
        name: 'john Johnson',
        id: '1100',
        email: 'john@gmail.com',
        phone: '111-111-1111',
        type: 'Personal'
      },
      {
        name: 'jake Johnson',
        id: '1200',
        email: 'jake@gmail.com',
        phone: '111-111-1111',
        type: 'Professional'
      }
    ],
    current: null,
    filtered: null
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
    console.log(contact.id);
  };
  //Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  //Set Current Contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  //Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //Update Contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  //Filter Contacts
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };
  //ClearFilter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        filterContacts,
        clearFilter,
        clearCurrent,
        updateContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;

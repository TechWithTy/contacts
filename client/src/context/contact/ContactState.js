import axios from 'axios';
import React, { useReducer } from 'react';
import {
  ADD_CONTACT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  CONTACT_ERROR,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  SET_CURRENT,
  UPDATE_CONTACT
} from '../types';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';

const ContactState = props => {
  const initialState = {
    contacts: [],
    current: null,
    filtered: null,
    error: null
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //Add Contact
  const addContact = async contact => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/contacts', contact, config);
      dispatch({ type: ADD_CONTACT, payload: res.data });
      console.log(contact.id);
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.mg });
    }
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
        error: state.error,
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

import { combineReducers } from 'redux';
import { contactReducer } from './contacts/contactsSlice';
import { createContactReducer } from './contacts/createContact';

export const reducer = combineReducers({
  contacts: contactReducer,
  contactInfo: createContactReducer,
});

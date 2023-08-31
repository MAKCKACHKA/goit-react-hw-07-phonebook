import { createSlice } from '@reduxjs/toolkit';
import { contactState } from 'redux/contacts/contactState';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
    delContact: (state, action) => {
      state.contacts = action.payload;
    },
  },
});

export const contactReducer = contactsSlice.reducer;

export const { addContact, updateFilter, delContact } = contactsSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
import { contactState } from 'redux/contacts/contactState';
import { addContact, deleteContact, fetchContacts } from 'redux/operations';

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactState,
  reducers: {
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
    delContact: (state, action) => {
      state.contacts.items = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items.filter(contact => contact.id !== action.payload);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactReducer = contactsSlice.reducer;

export const { updateFilter, delContact } = contactsSlice.actions;

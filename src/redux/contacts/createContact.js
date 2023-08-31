import { createSlice } from '@reduxjs/toolkit';
import { createContactState } from 'redux/contacts/createContactState';

export const contactCreateSlice = createSlice({
  name: 'contactInfo',
  initialState: createContactState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeNumber: (state, action) => {
      state.number = action.payload;
    },
  },
});
export const createContactReducer = contactCreateSlice.reducer;

export const { changeName, changeNumber } = contactCreateSlice.actions;

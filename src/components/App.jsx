import { Title1, Title2 } from './Styles';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Title1>Phonebook</Title1>
      <ContactForm />
      <Title2>Contacts</Title2>
      <Filter />
      <ContactList />
    </div>
  );
};

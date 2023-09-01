import { useDispatch, useSelector } from 'react-redux';
import { List, Item, DelButton, Text, Title2 } from './Styles';
import { delContact } from 'redux/contacts/contactsSlice';
import { selectContacts, selectFilter } from 'redux/contacts/selesctors';
import { deleteContact } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selesctors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
    dispatch(delContact(contacts.filter(contact => contact.id !== id)));
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {isLoading && !error && <Title2>Request in progress...</Title2>}
      {error ? (
        <Title2>{error}</Title2>
      ) : (
        filteredContacts.map(contact => (
          <Item key={contact.id} data-key={contact.id}>
            <Text>
              {contact.name}: {contact.number + '  '}
            </Text>
            <DelButton type="button" onClick={() => handleDelete(contact.id)}>
              Delete
            </DelButton>
          </Item>
        ))
      )}
    </List>
  );
};

export default ContactList;

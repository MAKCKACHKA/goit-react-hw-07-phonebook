import { useDispatch, useSelector } from 'react-redux';
import { List, Item, DelButton, Text } from './Styles';
import { delContact } from 'redux/contacts/contactsSlice';

const ContactList = () => {
  const { contacts, filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(delContact(contacts.filter(contact => contact.id !== id)));
  };

  const handleDelete = id => {
    deleteContact(id);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <List>
      {filteredContacts.map(contact => (
        <Item key={contact.id}>
          <Text>
            {contact.name}: {contact.number + '  '}
          </Text>
          <DelButton type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </DelButton>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;

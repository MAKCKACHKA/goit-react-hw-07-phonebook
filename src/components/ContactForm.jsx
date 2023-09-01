import { Form, Button, Group, Label, Input } from './Styles';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeNumber } from 'redux/contacts/createContact';

import {
  selectContacts,
  selectName,
  selectNumber,
} from 'redux/contacts/selesctors';
import { addContact } from 'redux/operations';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const name = useSelector(selectName);
  const number = useSelector(selectNumber);

  const dispatch = useDispatch();
  const nam = value => dispatch(changeName(value));
  const num = value => dispatch(changeNumber(value));

  const createContact = data => {
    const newContact = {
      ...data,
    };
    dispatch(addContact(newContact));
  };

  const handleChange = ({ target }) => {
    if (target.name === 'name') {
      nam(target.value);
    } else if (target.name === 'number') {
      num(target.value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts!`);
    } else {
      createContact({
        name,
        number,
      });
      nam('');
      num('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Group>
        <Input
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
        <Label>Name</Label>
      </Group>
      <Group>
        <Input
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
        <Label>Number </Label>
      </Group>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;

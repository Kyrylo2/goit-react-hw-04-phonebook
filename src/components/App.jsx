import { useState, useEffect } from 'react';
import ContactsForm from '../components/Form';
import Filter from '../components/Filter';
import ContactList from '../components/ContactsList';

import Typography from '@mui/material/Typography';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key) ?? defaultValue);
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const getFormData = (name, number, id) => {
    setContacts(prevState => [
      ...prevState,
      { name: name, number: number, id: id },
    ]);
  };

  const setFilterToState = data => setFilter(data);

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const contactsFilterData = filterData =>
    filterData.filter(el => el.name.toLowerCase().includes(filter));

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Typography
        variant="h3"
        variantMapping={{ h3: 'h1' }}
        gutterBottom
        align="center"
      >
        Phonebook
      </Typography>
      <ContactsForm onSubmit={getFormData} />

      {contacts.length > 1 || filter !== '' ? (
        <Filter filterDataToState={setFilterToState} />
      ) : null}

      {contacts.length > 0 && (
        <ContactList
          contacts={contactsFilterData(contacts)}
          onDelete={deleteContact}
        />
      )}
    </>
  );
}

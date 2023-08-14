import { useState, useEffect } from 'react';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  //  componentDidMount()
  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  //  componentDidUpdate(prevProps, prevState)
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmitApp = newContact => {
    setContacts(prevState => [...prevState, newContact]);
  };

  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const handleDelete = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contactId !== contact.id)
    );
  };

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts =
    contacts.length > 0
      ? contacts.filter(contact =>
          contact.alias.toLowerCase().includes(normalizedFilter)
        )
      : contacts;

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmitApp} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilter} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </>
  );
};

export default App;

// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },

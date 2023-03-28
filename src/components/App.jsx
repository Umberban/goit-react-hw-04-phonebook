import { useState,useEffect } from "react";
import {ContactForm} from "./ContactForm/ContactForm"
import { nanoid } from 'nanoid'
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter,setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const localContacts = JSON.parse(contacts);

    if(localContacts) {
      setContacts(localContacts);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (data)=>{
    const Contact = {
      name: data.name,
      number: data.number,
      id: nanoid(),
    };
    if(contacts.find(contact=>contact.name===data.name)){
      window.alert(`${data.name} is already in contacts list`);
    }else{ return setContacts([Contact, ...contacts])
      }
  }
  

  const handleDelete = (id)=>{
    setContacts(contacts.filter(contact=>contact.id!==id)) 
  }


  const handleChange = evt => {
    const { value } = evt.target;
    setFilter( value );
  };



  const filterContact = () => {
    const lowerCaseFiltered = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFiltered)
    );
  };

    const filteredContacts = filterContact();
    return (
      <>
      <h1>Phonebook</h1>
    <ContactForm addContact={addContact}/>
    <Filter handleChange={handleChange} filter={filter} />
    <ContactList contacts={filteredContacts} clickHandler={handleDelete}/>
      </>
    );
  };

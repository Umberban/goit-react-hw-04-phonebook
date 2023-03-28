import { Component } from "react";
import {ContactForm} from "./ContactForm/ContactForm"
import { nanoid } from 'nanoid'
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export class App extends Component{


  state = {  
    contacts: [],
    filter:'',
  }

  componentDidMount () {
    const contacts = localStorage.getItem('contacts');
    const localContacts = JSON.parse(contacts);

    if(localContacts) {
      this.setState({ contacts: localContacts });
    };
  };

  componentDidUpdate (prevProps, prevState) {
    if(this.state.contacts !== prevState.contacts) {
     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    };
  };

  addContact = (data)=>{
    const Contact = {
      name: data.name,
      number: data.number,
      id: nanoid(),
    };
    if(this.state.contacts.find(contact=>contact.name===data.name)){
      window.alert(`${data.name} is already in contacts list`);
    }else{
      return this.setState(({ contacts }) => ({
        contacts: [Contact, ...contacts]
      }));}
  }
  

  handleDelete = (id)=>{
   return this.setState((prev)=>({
      contacts: prev.contacts.filter(contact=>contact.id!==id)
      
    }))
  }


  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };



  filterContact = () => {
    const lowerCaseFiltered = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFiltered)
    );
  };
  


  render(){
    const { filter } = this.state;
    const contacts = this.filterContact();
    return (
      <>
      <h1>Phonebook</h1>
    <ContactForm addContact={this.addContact}/>
    <Filter handleChange={this.handleChange} filter={filter} />
    <ContactList contacts={contacts} clickHandler={this.handleDelete}/>
      </>
    );
  }
};

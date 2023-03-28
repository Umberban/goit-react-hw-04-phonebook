import css from './ContactForm.module.css'
import { useState } from "react";
import PropTypes from 'prop-types';

export const ContactForm =({addContact})=> {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


 const handlerSumbit = e =>{
    e.preventDefault();
    setName(e.target.name.value);
    setNumber(e.target.number.value)
    
    addContact({name,number});
    setNumber('')
    setName('')
  }
 const handleChange = evt => {
    if(evt.target.name==='name'){
      setName(evt.target.value)
     }
    else if(evt.target.name==='number'){
      setNumber(evt.target.value)
    }
  };

  
return(
    <form className={css.form} onSubmit={handlerSumbit}>
    
    <label className={css.label} for="name">
        Name
        </label>
    <input
  type="text"
  id="name"
  onChange={handleChange}
  name="name"
  value={name}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
<label className={css.label} for="number">
  Phone number
  </label>
<input
  onChange={handleChange}
  type="tel"
  id="number"
  name="number"
  value={number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
  <button type="submit" className={css.btn}>ADD</button>
  </form>
)

}
ContactForm.propTypes = {
  addContact: PropTypes.func,
};
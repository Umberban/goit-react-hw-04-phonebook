import css from './ContactForm.module.css'
import { Component } from "react";
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
  name: '',
  number:'', }

  handlerSumbit = e =>{
    e.preventDefault();
    this.setState({
      name: e.target.name.value,
      number: e.target.number.value
    })
    
    this.props.addContact({...this.state});
    this.setState({
      name:'',
      number:'',
    })
  }
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render(){
    const { name, number } = this.state;
return(
    <form className={css.form} onSubmit={this.handlerSumbit}>
    
    <label className={css.label} for="name">
        Name
        </label>
    <input
  type="text"
  id="name"
  onChange={this.handleChange}
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
  onChange={this.handleChange}
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
)}

}
ContactForm.propTypes = {
  addContact: PropTypes.func,
};
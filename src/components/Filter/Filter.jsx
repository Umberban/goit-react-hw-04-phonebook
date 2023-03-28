import css from './Filter.module.css'
import PropTypes from 'prop-types';
export const Filter =({handleChange,filter})=>{
    return(
        <>
<label className={css.label}  for='filter'>
   Search by Name
    </label>
<input
className={css.input}
id="filter"
type="text"
onChange={handleChange}
name="filter"
value={filter}
pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"

/>
</>)
}
Filter.propTypes = {
    handleChange: PropTypes.func,
    filter: PropTypes.string
  };
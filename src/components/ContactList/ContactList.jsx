import css from './ContactList.module.css'
import PropTypes from 'prop-types';
export const ContactList =({contacts,clickHandler})=>{
    return(
        <ul className={css.list}>
            {contacts.map(({id,name,number})=>(<li className={css.item} key={id}>
                <div>
                <p><b>Name:</b> {name}</p>
                <p><b>Phone:</b> {number}</p>
                </div>
                <button className={css.btn} type='button' onClick={()=>clickHandler(id)}>X</button>
            </li>))}
        </ul>
    )
}
// toFix
ContactList.propTypes = {
    contacts: PropTypes.array,
    clickHandler: PropTypes.func
  };
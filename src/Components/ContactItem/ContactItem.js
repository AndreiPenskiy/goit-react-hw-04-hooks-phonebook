import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
    <li>
        {name}: {number}
        <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
        </button>
    </li>
};

ContactItem.propTypes = {
  contactId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
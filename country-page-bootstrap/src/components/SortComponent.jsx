import PropTypes from 'prop-types';
import styles from './SortComponent.module.css';

function SortComponent({ sortByOptions, handler }) {
    
    const handleChange = (event) => {
        handler(event.target.value);
    }

    return (
        <div>
            <label htmlFor="sortby" className={`form-label ${styles.label1}`}>Sort by</label>
            <select name="sortby" className={`form-select ${styles.filterSelect}`} onChange={handleChange}>
                
                { sortByOptions.map(option => (
                    <option key={ option.value } value={ option.value }>{ option.label }</option>
                ))}

            </select>
        </div>
    );
}

export default SortComponent;

SortComponent.propTypes = {
    sortByOptions: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    })).isRequired,
    handler: PropTypes.func.isRequired
}
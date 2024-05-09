import PropTypes from 'prop-types';
import styles from './CheckboxFilter.module.css';
import { useEffect, useState } from 'react';

function CheckboxFilter({ label, filters, handler }) {
    const [selected, setSelected] = useState([]);

    const isChecked = (value) => {
        return selected.includes(value);
    };

    const handleChange = (event) => {
        const { value } = event.target;
        const checked = isChecked(value);
        if (!checked) {
            setSelected([...selected, value]);
        } else {
            setSelected(selected.filter(item => item !== value));
        }
    };

    useEffect(() => {
        handler(selected);
    }, [selected]);

    return (
        <fieldset className={`${styles.checksFilter}`}>
            <legend className={`${styles.label1}`}>{ label }</legend>
            
            { filters.map(filter => (
                <div key={ filter.value } className="form-check">
                    <input 
                        className="form-check-input"
                        type="checkbox"
                        value={ filter.value }
                        id={ filter.value }
                        onChange={ handleChange }
                        checked={ isChecked(filter.value) }
                    />
                    <label 
                        className="form-check-label"
                        htmlFor={ filter.value }
                    >
                        { filter.label }
                    </label>
                </div>
            ))}

        </fieldset>
    );
}

export default CheckboxFilter;

CheckboxFilter.propTypes = {
    label: PropTypes.string.isRequired,
    filters: PropTypes.array.isRequired,
    handler: PropTypes.func.isRequired
};
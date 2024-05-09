import PropTypes from 'prop-types';
import styles from './ToogleFilter.module.css';
import { useEffect, useState } from 'react';


function ToogleFilter({ label, filters, handler }) {
    const [selected, setSelected] = useState(filters.map(filter => filter.value));
    
    const isChecked = (value) => {
        return selected.includes(value);
    };

    const handleOnChange = (event) => {
        const { name } = event.target;
        const checked = isChecked(name);
        if (!checked) {
            setSelected([...selected, name]);
        } else {
            setSelected(selected.filter(item => item !== name));
        }
    };

    useEffect(() => {
        handler(selected);
    }, [selected]);

    return (
        <fieldset className={`d-flex flex-wrap`}>
            <legend className={`${styles.label1}`}>{ label }</legend>
            
            { filters.map(filter => (
                <div key={ filter.value }>
                    {/* <input 
                        type="checkbox"
                        className={`btn-check`}
                        name={ filter.value }
                        id={ filter.value }
                        // checked={true}
                        onChange={ handleOnChange }
                    />
                    <label 
                        // className={`btn ${styles.toogleLabel} ${selected.includes(filter.value) ? styles.active : ''}`}
                        className={`btn ${styles.toogleLabel}`}
                        htmlFor={ filter.value }
                    >
                        { filter.label }
                    </label> */}
                    <button 
                        type='button'
                        className={`btn ${styles.btnToogle} ${isChecked(filter.value) ? styles.active : ''}`}
                        name={ filter.value }
                        onClick={ handleOnChange }
                    >
                        { filter.label }
                    </button>
                </div>
            ))}

        </fieldset>
    );
}

export default ToogleFilter;

ToogleFilter.propTypes = {
    label: PropTypes.string.isRequired,
    filters: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    })).isRequired,
    handler: PropTypes.func.isRequired
};
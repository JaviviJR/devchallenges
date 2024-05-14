import PropTypes from 'prop-types';
import styles from './InputSearch.module.css';
import Search from "../assets/Search.svg"
import { useEffect, useState } from 'react';

function InputSearch({ handler }) {
    const [search, setSearch] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            handler(search);
        }, 500);
        return () => clearTimeout(timeout);
    }, [search]);

    return (
        <div className={`input-group ${styles.inputSearch}`}>
            <span className='input-group-text'><img src={ Search } /></span>
            <input 
                type='text'
                className='form-control'
                placeholder='Search by Name, Region, Subregion'
                onChange={ (event) => setSearch(event.target.value)}
            />
        </div>
    );
}

export default InputSearch;

InputSearch.propTypes = {
    handler: PropTypes.func.isRequired
}
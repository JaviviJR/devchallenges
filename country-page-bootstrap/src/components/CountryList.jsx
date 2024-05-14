import PropTypes from 'prop-types';
import styles from './CountryList.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ITEMS_PER_PAGE = 10;

function CountryList({ countries }) {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(countries.length / ITEMS_PER_PAGE);

    const currentCountries = countries.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handleNextPage = () => {
        setCurrentPage((page) => Math.min(page + 1, totalPages));
    };

    const handlePreviousPage = () => {
        setCurrentPage((page) => Math.max(page - 1, 1));
    };

    const handleClickedCountry = (id) => {
        navigate(`/country/${id}`);
    };

    return (
        <div className={`${styles.countryList}`}>
            <table className={`table align-middle`}>
                <thead>
                    <tr>
                        <th scope="col">Flag</th>
                        <th scope="col">Name</th>
                        <th scope="col">Population</th>
                        <th scope="col">Area (km2)</th>
                        <th scope="col" className="d-none d-lg-table-cell">Region</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider" style={{borderTop: "1px solid #272a2f"}}>
                    { currentCountries.map((country, index) => (
                        <tr key={ index } onClick={ () => handleClickedCountry(country.ccn3) }>
                            <td><img className={styles.flagImage} src={country.flag} /></td>
                            <td>{ country.name }</td>
                            <td>{ country.population.toLocaleString() }</td>
                            <td>{ country.area.toLocaleString() }</td>
                            <td className="d-none d-lg-table-cell">{ country.region }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={`${styles.pagination}`}>
                <button className={`${styles.paginationButton}`} onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                <span className={`${styles.paginationInfo}`}>Page {currentPage} of {totalPages}</span>
                <button className={`${styles.paginationButton}`} onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
}

export default CountryList;

CountryList.propTypes = {
    countries: PropTypes.array.isRequired
}
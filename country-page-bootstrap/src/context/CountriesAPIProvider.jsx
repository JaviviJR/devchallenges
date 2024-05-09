import PropTypes from "prop-types";

import { CountriesAPIContext } from "./CountriesAPIContext";
import { getAllCountries } from "../hooks/useCountriesAPI";

export function CountriesAPIProvider({ children }) {
    async function getCountries(fields = []) {
        const countries = await getAllCountries(fields);
        return countries.map(country => {
            return {
                name: country.name.common,
                population: country.population,
                area: country.area,
                region: country.region,
                subregion: country.subregion,
                flag: country.flags.svg,
                independent: country.independent,
                unMember: country.unMember,
            }
        });
    }
    

    return (
        <CountriesAPIContext.Provider value={{
            getCountries
        }}>
            { children }
        </CountriesAPIContext.Provider>
    );
}

CountriesAPIProvider.propTypes = {
    children: PropTypes.node.isRequired
}
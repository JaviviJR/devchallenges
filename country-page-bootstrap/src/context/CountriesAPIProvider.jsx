import PropTypes from "prop-types";

import { CountriesAPIContext } from "./CountriesAPIContext";
import { getAllCountries, getCountryByCode } from "../hooks/useCountriesAPI";

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
                ccn3: country.ccn3,
            }
        });
    }

    async function getCountry(code) {
        let country = await getCountryByCode(code);
        
        // console.log('country', country);
        country = country[0];
        // console.log(`country ${code} - capital`, country.capital, country.capital && country.capital.lenght > 0 ? country.capital[0] : 'No Capital',);
        // console.log(country.capital, country.capital && country.capital.length);

        return {
            shortName: country.name.common,
            longName: country.name.official,
            population: country.population,
            area: country.area,
            region: country.region,
            subregion: country.subregion,
            flag: country.flags.png,
            independent: country.independent,
            unMember: country.unMember,
            ccn3: country.ccn3,
            capital: country.capital && country.capital.length > 0 ? country.capital[0] : 'No Capital',
            languages: Object.values(country.languages),
            currencies: Object.values(country.currencies).map(currency => currency.name),
            continents: country.continents,
            borders: country.borders,
        };
    }
    

    return (
        <CountriesAPIContext.Provider value={{
            getCountries,
            getCountry
        }}>
            { children }
        </CountriesAPIContext.Provider>
    );
}

CountriesAPIProvider.propTypes = {
    children: PropTypes.node.isRequired
}
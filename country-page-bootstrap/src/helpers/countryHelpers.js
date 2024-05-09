
export const sortCountries = (sortBy, countries) => {
    return countries.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'area') {
            return b.area - a.area;
        } else {
            return b.population - a.population;
        }
    });
};

export const filterCountries = (countries, filter) => {
    // console.log('filterCountries', countries, filter);

    // Por regiones
    let filteredCountries = countries.filter(country => {
        return filter.region.includes(country.region);
    });

    // Por estado
    filteredCountries = filteredCountries.filter(country => {
        if (filter.status.length === 0) {
            return true;
        }

        if (filter.status.includes('unMember') && !country.unMember) {
            return false;
        }
            
        if (filter.status.includes('independent') && !country.independent) {
            return false;
        }
                
        return true;
        // console.log('filter.status', filter.status, country.unMember, country.independent, 'result', result);
    });

    // Por busqueda

    return filteredCountries;
};
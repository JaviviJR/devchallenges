
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
    let filteredCountries = countries;

    // Por regiones
    if (filter.region.length > 0) {
        filteredCountries = countries.filter(country => {
            return filter.region.includes(country.region);
        });
    }

    // Por estado
    if (filter.status.length > 0) {
        filteredCountries = filteredCountries.filter(country => {
            if (filter.status.includes('unMember') && !country.unMember) {
                return false;
            }
                
            if (filter.status.includes('independent') && !country.independent) {
                return false;
            }
                    
            return true;
        });
    }

    // Por busqueda
    if (filter.searchBy.length > 0) {
        console.log('filter.searchBy', filter.searchBy);
        filteredCountries = filteredCountries.filter(country => {
            return country.name.toLowerCase().includes(filter.searchBy.toLowerCase()) ||
                country.region.toLowerCase().includes(filter.searchBy.toLowerCase()) ||
                country.subregion.toLowerCase().includes(filter.searchBy.toLowerCase());
        });
    }
    return filteredCountries;
};
import MainLayout from "../layout/MainLayout";
import Search from "../assets/Search.svg"
import styles from './MainPage.module.scss';
import { useContext, useEffect, useMemo, useState } from "react";
import { CountriesAPIContext } from "../context/CountriesAPIContext";
import CountryList from "../components/CountryList";
import { filterCountries, sortCountries } from "../helpers/countryHelpers";
import SortComponent from "../components/SortComponent";
import ToogleFilter from "../components/ToogleFilter";
import CheckboxFilter from "../components/CheckboxFilter";

const fields = [
    'name',
    'population',
    'area',
    'region',
    'subregion',
    'flags',
    'independent',
    'unMember'
];

const sortByOptions = [
    { value: 'population', label: 'Population' },
    { value: 'name', label: 'Name' },
    { value: 'area', label: 'Area' }
];

const regionFilters = [
    { value: 'Americas', label: 'Americas' },
    { value: 'Antartic', label: 'Antartic' },
    { value: 'Africa', label: 'Africa' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' }
];

const statusFilters = [
    { value: 'unMember', label: 'Member of the United Nations' },
    { value: 'independent', label: 'Independent' }
];

const filterBy = {
    searchBy: '',
    region: [],
    status: []
};

function MainPage() {
    const [countries, setCountries] = useState([]);
    const [sortBy, setSortBy] = useState('population');
    const [filter, setFilter] = useState(filterBy);

    const { getCountries } = useContext(CountriesAPIContext);

    useEffect(() => {
        const fetchCountries = async () => {
            const countries = await getCountries(fields);
            const sortedCountries = sortCountries(sortBy, countries);
            setCountries(sortedCountries);
        };
        fetchCountries();
    }, [getCountries]);
    
    const handleSortByChange = (value) => {
        setSortBy(value);
    };

    const handlerFilterRegion = (value) => {
        setFilter(prevFilter => ({ ...prevFilter, region: value }));
    };

    const handlerFilterStatus = (value) => {
        setFilter(prevFilter => ({ ...prevFilter, status: value }));
    };

    const procesedCountries = useMemo(() => {
        // console.log('memo filter', filter);
        
        const filteredCountries = filterCountries(countries, filter);
        // console.log('filteredCountries', filteredCountries);

        return sortCountries(sortBy, filteredCountries);
    }, [countries, sortBy, filter]);

    return (
        <MainLayout>
            <div className='d-flex w-100 justify-content-between align-items-center'>
                <div className={`${styles.counter}`}>
                    Found {procesedCountries.length} countries
                </div>
                <div className={`input-group ${styles.inputSearch}`}>
                    <span className='input-group-text'><img src={ Search } /></span>
                    <input type='text' className='form-control' placeholder='Search by Name, Region, Subregion'/>
                </div>
            </div>
            <div className='row pt-5'>
                
                <div className={`col-12 col-sm-3 ${styles.filterSection}`}>
                    
                    <SortComponent sortByOptions={ sortByOptions } handler={ handleSortByChange }/>
                    
                    <div className={`pt-5`}>
                        <ToogleFilter label={'Region'} filters={ regionFilters } handler={handlerFilterRegion}/>
                    </div>

                    <div className={`pt-5`}>
                        <CheckboxFilter label={'Status'} filters={ statusFilters } handler={handlerFilterStatus} />
                    </div>

                </div>
                
                <div className='col-12 col-sm-9'>
                    <CountryList countries={ procesedCountries }/>
                </div>
            </div>
        </MainLayout>
    );
}

export default MainPage;
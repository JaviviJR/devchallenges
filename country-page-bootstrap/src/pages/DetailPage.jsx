import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { useCallback, useContext, useEffect, useState } from "react";
import styles from './DetailPage.module.css';
import { CountriesAPIContext } from "../context/CountriesAPIContext";

function DetailPage() {
    const { id } = useParams();
    const { getCountry } = useContext(CountriesAPIContext);
    const [loading, setLoading] = useState(true);
    const [countryData, setCountryData] = useState(null);
    const navigate = useNavigate();

    const getCountryMemoized = useCallback(async (id) => {
        const data = await getCountry(id)
            .catch(() => {
                console.error('country not found');
                navigate(`/`);
            });
        
        const neighboursData = await Promise.all(data.borders.map(getCountry));
        data.neighboursData = neighboursData;
        return data;
    }, [id]);

    useEffect(() => {
        const fetchCountry = async () => {
            setLoading(true);
            const data = await getCountryMemoized(id);
            console.log('Country data:', data);
            setCountryData(data);
            setLoading(false);
        }
        fetchCountry();
    }, [id]);

    const handleNeighbourClick = (id) => {
        navigate(`/country/${id}`);
    };

    return (
        <MainLayout stylesProp={styles.box}>
            
            { !loading && (
                <>
                    <div className="position-relative">
                        <div className="position-absolute top-0 start-50 translate-middle">
                            <img className={styles.flag} src={countryData.flag} alt="bandera" />
                        </div>
                    </div>
                    <div className={styles.dataBlock}>
                        
                        <div className={`text-center ${styles.shortName}`}>
                            <h1>{ countryData.shortName }</h1>
                            <h4>{ countryData.longName }</h4>
                        </div>

                        <div className="pt-5 d-flex justify-content-evenly">
                            <div className={styles.dataBox}>
                                <div className={styles.labelBox}>
                                    <span>Population</span>
                                </div>
                                <div className={styles.valueBox}>
                                    <span>{ countryData.population.toLocaleString() }</span>
                                </div>
                            </div>
                            <div className={styles.dataBox}>
                                <div className={styles.labelBox}>
                                    <span>Area (km2)</span>
                                </div>
                                <div className={styles.valueBox}>
                                    <span>{ countryData.area.toLocaleString() }</span>
                                </div>
                            </div>
                        </div>

                        {/* <div className={ styles.dataList }>
                            <div className="d-flex pt-5 justify-content-between">
                                <span className={ styles.labelList }>Capital</span>
                                <span>{ countryData.capital }</span>
                            </div>
                            <div className="d-flex pt-5 justify-content-between">
                                <span className={ styles.labelList }>Subregion</span>
                                <span>{ countryData.subregion }</span>
                            </div>
                            <div className="d-flex pt-5 justify-content-between">
                                <span className={ styles.labelList }>Language</span>
                                <span>{ countryData.languages.toString() }</span>
                            </div>
                            <div className="d-flex pt-5 justify-content-between">
                                <span className={ styles.labelList }>Currencies</span>
                                <span>{ countryData.currencies.toString() }</span>
                            </div>
                            <div className="d-flex pt-5 justify-content-between">
                                <span className={ styles.labelList }>Continents</span>
                                <span>{ countryData.continents.toString() }</span>
                            </div>
                        </div> */}

                        <div className={`${styles.dataList} pt-5`}>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th>Capital</th>
                                        <td>{ countryData.capital }</td>
                                    </tr>
                                    <tr>
                                        <th>Subregion</th>
                                        <td>{ countryData.subregion }</td>
                                    </tr>
                                    <tr>
                                        <th>Language</th>
                                        <td>{ countryData.languages.toString() }</td>
                                    </tr>
                                    <tr>
                                        <th>Currencies</th>
                                        <td>{ countryData.currencies.toString() }</td>
                                    </tr>
                                    <tr>
                                        <th>Continents</th>
                                        <td>{ countryData.continents.toString() }</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="p-4">
                            <span>Neighbouring Countries</span>
                            <div className={`d-flex flex-wrap pt-4 justify-content-start ${styles.neighbourSection}`}>
                                { countryData.neighboursData.map( neighbour => (
                                    <div 
                                        className="mx-3"
                                        key={ neighbour.ccn3 } 
                                        onClick={() => handleNeighbourClick(neighbour.ccn3)}
                                        style={{cursor: 'pointer'}}
                                    >
                                        <img src={ neighbour.flag } />
                                        <span>{ neighbour.shortName }</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </>
            )}
            
        </MainLayout>
    );
}

export default DetailPage;
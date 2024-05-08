import MainLayout from "../layout/MainLayout";
import Search from "../assets/Search.svg"
import styles from './MainPage.module.scss';

function MainPage() {
    return (
        <MainLayout>
            <div className='d-flex w-100 justify-content-between align-items-center'>
                <div style={{color: '#6C727F'}}>
                    Found XXX countries
                </div>
                <div className={`input-group ${styles.inputSearch}`}>
                    <span className='input-group-text'><img src={ Search } /></span>
                    <input type='text' className='form-control' placeholder='Search by Name, Region, Subregion'/>
                </div>
            </div>
            <div className='row pt-5'>
                
                <div className={`col-3 ${styles.filterSection}`}>
                    
                    <div>
                        <label htmlFor="sortby" className={`form-label ${styles.labelFilter}`}>Sort by</label>
                        <select name="sortby" className="form-select" aria-label="Default select example">
                            <option value="population">Population</option>
                            <option value="name">Name</option>
                            <option value="area">Area</option>
                        </select>
                    </div>
                    
                    <div className={`pt-5`}>
                        <fieldset className='d-flex flex-wrap'>
                            <legend className={`${styles.labelFilter}`}>Region</legend>
                            
                            <input type="checkbox" className="btn-check" name="americas" />
                            <label className={`btn ${styles.toogleButton}`} htmlFor="americas">Americas</label>
                            
                            <input type="checkbox" className="btn-check" name="antartic" />
                            <label className={`btn ${styles.toogleButton}`} htmlFor="antartic">Antartic</label>

                            <input type="checkbox" className="btn-check" name="africa" />
                            <label className={`btn ${styles.toogleButton}`} htmlFor="africa">Africa</label>

                            <input type="checkbox" className="btn-check" name="asia" />
                            <label className={`btn ${styles.toogleButton}`} htmlFor="asia">Asia</label>

                            <input type="checkbox" className="btn-check" name="europe" />
                            <label className={`btn ${styles.toogleButton}`} htmlFor="europe">Europe</label>

                            <input type="checkbox" className="btn-check" name="oceania" />
                            <label className={`btn ${styles.toogleButton}`} htmlFor="oceania">Oceania</label>
                        </fieldset>
                    </div>

                    <div className={`pt-5`}>
                        <fieldset className={`${styles.checksFilter}`}>
                            <legend className={`${styles.labelFilter}`}>Status</legend>
                            
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Member of the United Nations
                                </label>
                            </div>
                            
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Independent
                                </label>
                            </div>

                        </fieldset>
                    </div>

                </div>
                
                <div className={`col-9 ${styles.countryList}`}>
                    <table className={`table`}>
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
                            <tr>
                                <td>Flag</td>
                                <td>China</td>
                                <td>1,402,112,000</td>
                                <td>9,706,961</td>
                                <td className="d-none d-lg-table-cell">Asia</td>
                            </tr>
                            <tr>
                                <td>Flag</td>
                                <td>India</td>
                                <td>1,439,323,776</td>
                                <td>3,287,590</td>
                                <td className="d-none d-lg-table-cell">Asia</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </MainLayout>
    );
}

export default MainPage;
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
                    <label htmlFor="sortby" className="form-label">Sort by</label>
                    <select name="sortby" className="form-select" aria-label="Default select example">
                        <option value="population">Population</option>
                        <option value="name">Name</option>
                        <option value="area">Area</option>
                    </select>
                    <label htmlFor="tpm">TPM</label>
                    <input name="tpm" type="checkbox" value='tpm'/>
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
import PropTypes from 'prop-types';
import styles from './MainLayout.module.css';
import Logo from '../assets/Logo.svg';

function MainLayout({ children, stylesProp }) {
    return (
        <>  
            <div className={styles.backgroundImage}>
                <div className='h-100 d-flex justify-content-center align-items-center'>
                    <img src={Logo} alt='logo'/>
                </div>
            </div>
            
            <div className="container-fluid m-0 p-0">
                <div 
                    /* p-5 */
                    className={`box ${styles.box} ${stylesProp}`}
                >
                    { children }
                </div>
            </div>
        </>
    );
}

export default MainLayout;

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
    stylesProp: PropTypes.string,
}
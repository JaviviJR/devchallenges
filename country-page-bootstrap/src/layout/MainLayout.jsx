import PropTypes from 'prop-types';
import styles from './MainLayout.module.css';
import Logo from '../assets/Logo.svg';

function MainLayout({ children }) {
    return (
        <div className="container-fluid m-0 p-0">
            <div className={styles.backgroundImage}>
                <div className='h-100 d-flex justify-content-center align-items-center'>
                    <img src={Logo} alt='logo'/>
                </div>
            </div>
            <div className={`p-5 ${styles.box}`}>
                { children }
            </div>
        </div>
    );
}

export default MainLayout;

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
}
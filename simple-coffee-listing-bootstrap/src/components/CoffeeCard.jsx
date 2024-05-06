import PropTypes from 'prop-types';
import styles from './CoffeeCard.module.css';

function CoffeeCard({ coffee }) {
    return (
        <div className={`card h-100 ${styles.cardcoffee} bg-transparent border border-0`}>
            <div className='position-relative'>
                {/* <div> */}
                    <img src={coffee.image} alt='Cappuccino' className='card-img-top mb-2' />
                {/* </div> */}
                <div className={`card-body ${styles.cardbodycoffee}`}>
                    <div className='card-title d-flex justify-content-between align-items-center'>
                        <div>
                            { coffee.name }
                        </div>
                        <div className={` ${styles.cardprice} `}>
                            { coffee.price }
                        </div>
                    </div>
                    <div className={`card-text mt-3 d-flex justify-content-between ${styles.coffeevotes}`}>
                        { coffee.rating 
                            ? (
                                <>
                                    <div>
                                        <img src='Star_fill.svg' alt='star' />
                                        <span>{ Number(coffee.rating).toFixed(1) }</span> <span className={styles.gray}>({ coffee.votes } votes)</span>
                                    </div>
                                    {!coffee.available && (
                                        <div className={styles.out}>
                                            Sold Out
                                        </div>
                                    )}
                                </>
                            ) 
                            : (
                                <div>
                                    <img src='Star.svg' alt='star' />
                                    <span className={styles.gray}>No ratings yet</span>
                                </div>
                            )
                        }
                    </div>
                </div>
                { coffee.popular && 
                    <div className={`position-absolute ${styles.popular} border border-0 py-2 px-4 rounded-pill fs-5`}>
                        Popular
                    </div>
                }
            </div>
        </div>
    );
}

export default CoffeeCard;

CoffeeCard.propTypes = {
    coffee: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        rating: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        votes: PropTypes.number.isRequired,
        popular: PropTypes.bool.isRequired,
        available: PropTypes.bool.isRequired
    }).isRequired
}

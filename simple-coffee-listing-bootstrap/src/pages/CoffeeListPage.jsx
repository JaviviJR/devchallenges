import { useEffect, useState } from 'react';
import styles from './CoffeeListPage.module.css';
import CoffeeCard from '../components/CoffeeCard';


function CoffeeListPage() {
    const [coffeeData, setCoffeeData] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        fetch('http://localhost:9005/coffeeData')
            .then(response => response.json())
            .then(data => {
                switch (filter) {
                    case 'available':
                        data = data.filter(coffee => coffee.available);
                        break;
                }
                setCoffeeData(data)
            })
            .catch(error => console.error(error));
    }, [filter]);

    const handleFilter = (e) => {
        setFilter(e.target.name);
    };

    return (
        <div className={`${styles.box} d-flex flex-column align-items-center text-center`}>
            <div className={styles.introduction}>
                <h1>Our Collection</h1>
                <p>
                    Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
                </p>
                <div className={`${styles.filter} d-flex justify-content-evenly mt-5`}>
                    
                    <button 
                        name='all'
                        className={ filter === 'all' && styles.enabled}
                        onClick={handleFilter}
                    >
                        All Products
                    </button>
                    
                    <button
                        name='available'
                        className={ filter === 'available' && styles.enabled}
                        onClick={handleFilter}
                    >
                        Available Now
                    </button>

                </div>
            </div>
            {/* <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3 w-75'> */}
            <div className='row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 px-5'>
                    {coffeeData.map((coffee) => (
                        <div key={coffee.id} className='col'>
                            <CoffeeCard coffee={coffee}/>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default CoffeeListPage;
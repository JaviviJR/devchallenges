import './App.css'

function App() {
  
  return (
    <>
      <div className='container'>
        <div className='background-image'></div>
        <div className='box d-flex flex-column align-items-center'>
          <div className='introduction'>
            <h1>Our Collection</h1>
            <p>
              Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
            </p>
          </div>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3 w-75'>
            
            <div className='col'>
              <div className='card h-100 card-coffee bg-transparent border border-0'>
                <img src='https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg' alt='Cappuccino' className='card-img-top mb-2' />
                <div className='card-body card-body-coffee'>
                  <div className='card-title d-flex justify-content-between'>
                    <h3>Cappuccino</h3>
                    <p>5.20€</p>
                  </div>
                  <p className='card-text mt-3 coffee-votes'>
                    4.7 (65 votes)
                  </p>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card h-100 card-coffee bg-transparent border border-0'>
                <img src='https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg' alt='Cappuccino' className='card-img-top mb-2' />
                <div className='card-body card-body-coffee'>
                  <div className='card-title d-flex justify-content-between'>
                    <h3>Cappuccino</h3>
                    <p>5.20€</p>
                  </div>
                  <p className='card-text mt-3 coffee-votes'>
                    4.7 (65 votes)
                  </p>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card h-100 card-coffee bg-transparent border border-0'>
                <img src='https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg' alt='Cappuccino' className='card-img-top mb-2' />
                <div className='card-body card-body-coffee'>
                  <div className='d-flex justify-content-between'>
                    <p>Cappuccino</p>
                    <p>5.20€</p>
                  </div>
                  <p className='card-text mt-3 coffee-votes'>
                    4.7 (65 votes)
                  </p>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card h-100 card-coffee bg-transparent border border-0'>
                <img src='https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg' alt='Cappuccino' className='card-img-top mb-2' />
                <div className='card-body card-body-coffee'>
                  <div className='card-title d-flex justify-content-between'>
                    <h3>Cappuccino</h3>
                    <p>5.20€</p>
                  </div>
                  <p className='card-text mt-3 coffee-votes'>
                    4.7 (65 votes)
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App

import './App.scss';
import SideNavBar from './containers/SideNavBar/SideNavBar';
import BeerCard from './componets/BeerCard/BeerCard';
import { useState, useEffect } from 'react';


function App() {

  const [beers, setBeers] = useState();

  const getBeers = () => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setBeers(data)
      })
  }

  useEffect(getBeers, []);

  return (
    <div className="App">
      <header>Header</header>
      <main>
        <section className='side-nav'>
          <SideNavBar />
        </section>

        <section className='beer-cards'>
          {beers && <BeerCard beersArr={beers}/>}
        </section>
      </main>
    </div>
  );
}

export default App;

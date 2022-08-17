import './App.scss';
import SideNavBar from './containers/SideNavBar/SideNavBar';
import BeerCard from './componets/BeerCard/BeerCard';
import { useState, useEffect } from 'react';


function App() {

  const [beers, setBeers] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  let filteredBeers;
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

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  if(beers !== undefined){
    filteredBeers = beers.filter((beer) => {
      const beerLower = beer.name.toLowerCase();
  
      return beerLower.includes(searchTerm);
    });
  }

  return (
    <div className="App">
      <header>Header</header>
      <main>
        <section className='side-nav'>
          {beers && <SideNavBar searchTerm={searchTerm} handleInput={handleInput}/>}
        </section>

        <section className='beer-cards'>
          {beers && <BeerCard beersArr={filteredBeers}/>}
        </section>
      </main>
    </div>
  );
}

export default App;

import './App.scss';
import SideNavBar from './containers/SideNavBar/SideNavBar';
import BeerCard from './componets/BeerCard/BeerCard';
import brewdogLogo from "./assets/images/Brewdog_logo_modified.png";
import { useState, useEffect } from 'react';
let counter = 0;
function App() {

  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBeers, setFilteredBeers] = useState();
  let holderBeers;

  const getBeers = () => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setBeers(data);
        setFilteredBeers(data);
      });
  }

  useEffect(getBeers, []);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    if(cleanInput === ""){
      setSearchTerm("");
    }
    else{
      setSearchTerm(cleanInput);
    }

  };

  useEffect(() => {
    if(beers !== undefined){
      if(searchTerm === ""){
        holderBeers = beers;
      }
      else{
        holderBeers = beers.filter((beer) => {
          const beerLower = beer.name.toLowerCase();
            return beerLower.includes(searchTerm) && (filteredBeers.some((filteredbeer) => filteredbeer.name === beer.name))
        });
      }
      setFilteredBeers(holderBeers);
    }
  },[searchTerm])

  const handleFilterBeers = (filter) => {
    switch(filter){
      case "High ABV":
        holderBeers = beers.filter((beer) => {
          return beer.abv > 6;
        });
        break;
      case "Classic Range":
        holderBeers = beers.filter((beer) => {
          const yearBrewed = beer.first_brewed.split("/");
          return Number(yearBrewed[1]) < 2010;
        });
        break;
      case "Acidic":
        holderBeers = beers.filter((beer) => {
          return beer.ph < 4;
        });
        break;
      default:
        holderBeers = beers;
        break;
    }
    setFilteredBeers(holderBeers);
  }
  
  return (
    <div className="App">
      <header>
        <img src={brewdogLogo} alt="Brewdog Brewing Company"/>
        <h1>Great beer that's great for the planet.</h1>
      </header>
      
      <main>
          <section className='side-nav'>
            {beers && filteredBeers && <SideNavBar searchTerm={searchTerm} handleInput={handleInput} handleFilterBeers={handleFilterBeers}/>}
          </section>

          <section className='beer-cards'>
            {beers && filteredBeers && <BeerCard filteredBeersArr={filteredBeers}/>}
 
          </section>
      
      </main>
    </div>
  );
}

export default App;

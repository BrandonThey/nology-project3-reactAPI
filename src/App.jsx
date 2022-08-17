import './App.scss';
import SideNavBar from './containers/SideNavBar/SideNavBar';
import BeerCard from './componets/BeerCard/BeerCard';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {

  const [beers, setBeers] = useState();
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
    setSearchTerm(cleanInput);

    if(beers !== undefined){
      holderBeers = beers.filter((beer) => {
        const beerLower = beer.name.toLowerCase();
        return beerLower.includes(searchTerm);
      });
      setFilteredBeers(holderBeers);
    }
  };

  const handleFilterBeers = (filter) => {
    switch(filter){
      case "High ABV":
        console.log(filter)
        holderBeers = beers.filter((beer) => {
          return beer.abv > 6;
        });
        setFilteredBeers(holderBeers);
        break;
      case "Classic Range":
        holderBeers = beers.filter((beer) => {
          const yearBrewed = beer.first_brewed.split("/");
          return Number(yearBrewed[1]) < 2010;
        });
        setFilteredBeers(holderBeers);
        break;
      case "Acidic":
        holderBeers = beers.filter((beer) => {
          return beer.ph < 4;
        });
        setFilteredBeers(holderBeers);
        break;
      default:
        setFilteredBeers(beers);
        break;
    }
  }

  
  return (
    <Router>
      <div className="App">
        <header>Header</header>
        <Routes>
          <Route path="/" element={
            <main>
                  <section className='side-nav'>
                    {beers && filteredBeers && <SideNavBar searchTerm={searchTerm} handleInput={handleInput} handleFilterBeers={handleFilterBeers}/>}
                  </section>

                <section className='beer-cards'>
                  {beers && filteredBeers && <BeerCard beersArr={filteredBeers}/>}
                </section>
            </main>
            }>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

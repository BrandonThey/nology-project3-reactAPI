import './App.scss';
import SideNavBar from './containers/SideNavBar/SideNavBar';
import BeerCard from './componets/BeerCard/BeerCard';
import brewdogLogo from "./assets/images/Brewdog_logo_modified.png";
import { useState, useEffect } from 'react';
function App() {

  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBeers, setFilteredBeers] = useState();
  const [myBeers, setMyBeers] = useState([]);
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

  const getMyBeers = (holderBeers) => {
    fetch("http://localhost:3030/api/beers")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setMyBeers(data);
      });
  }

  useEffect(getMyBeers, [])
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
      case "My Beers":
        holderBeers = myBeers;
        break;
      default:
        holderBeers = beers;
        break;
    }
    setFilteredBeers(holderBeers);
  }
  
  const handleSubmition = (event) => {
    event.preventDefault();
    let beerName = event.target[0].value;
    let tagline = event.target[1].value;
    let beerObject = {
        "id": myBeers.length + 2,
        "name": beerName,
        "tagline": tagline,
        "first_brewed": "08/2020",
        "description": "Evil syrup and a touch of crushed gooseberry",
        "image_url": "https://images.punkapi.com/v2/keg.png",
        "abv": 4.2,
        "ph": 5.7,
        "food_pairing": [
            "Meatballs",
            "Green Beans",
            "Regular Beans"
        ]
    }
    const reqestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({beer: beerObject})
    };

    fetch("http://localhost:3030/api/submittion", reqestOptions)
    .then(response=>response.json())
    .then(data => console.log(data))
}

  return (
    <div className="App">
      <header>
        <img src={brewdogLogo} alt="Brewdog Brewing Company"/>
        <h1>Great beer that's great for the planet.</h1>
      </header>
      
      <main>
          <section className='side-nav'>
            {beers && filteredBeers && <SideNavBar searchTerm={searchTerm} handleInput={handleInput} handleFilterBeers={handleFilterBeers} handleSubmition={handleSubmition}/>}
          </section>

          <section className='beer-cards'>
            {beers && filteredBeers && <BeerCard filteredBeersArr={filteredBeers}/>}
 
          </section>
      
      </main>
    </div>
  );
}

export default App;

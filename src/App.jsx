import './App.scss';
import SideNavBar from './containers/SideNavBar/SideNavBar';
import BeerCard from './componets/BeerCard/BeerCard';
import brewdogLogo from "./assets/images/Brewdog_logo_modified.png";
import { useState, useEffect } from 'react';
function App() {

  //creating usestates:
    //beers: to hold beer data from the PunkAPI
    //searchTerm: to hold search parameters, acquired from the user and the search bar
    //filteredBeers: to hold beers that have been filtered out using the searchterm or buttons
    //myBeers: to hold beer data from my API 
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBeers, setFilteredBeers] = useState();
  const [myBeers, setMyBeers] = useState([]);
  //throwaway variable to temporarily hold information from beers usestate
  let holderBeers;

  //function to fetch beers from the punk API and setting them to the beers usestate
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

  //function to fetch beers from mp API and setting them to the myBeers usestate
  const getMyBeers = (holderBeers) => {
    fetch("http://localhost:3030/api/beers")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setMyBeers(data);
      });
  }

  //upon mounting, call functions to get Punk API beers and my beers
  useEffect(getMyBeers, [])
  useEffect(getBeers, []);

  //function that handles searchbar input from the user
  const handleInput = (event) => {
    //clean the input by lowercasing it
    const cleanInput = event.target.value.toLowerCase();
    //setting the user input into the setSearchTerm usestate
    if(cleanInput === ""){
      setSearchTerm("");
    }
    else{
      setSearchTerm(cleanInput);
    }

  };

  //On change of the searchTerm usestate, we filter out beers based on the searchterm
  useEffect(() => {
    if(beers !== undefined){
      //if the serachterm is empty then no filtering happens
      if(searchTerm === ""){
        holderBeers = beers;
      }
      //else the serachterm is not empty, so filter beers out with names matching the searchTerm
      else{
        holderBeers = beers.filter((beer) => {
          const beerLower = beer.name.toLowerCase();
            return beerLower.includes(searchTerm) && (filteredBeers.some((filteredbeer) => filteredbeer.name === beer.name))
        });
      }
      //set the filtered out beers to the filteredBeers usestate for later use
      setFilteredBeers(holderBeers);
    }
  },[searchTerm])

  //function that handles filering out by type, filtering by button presses
  const handleFilterBeers = (filter) => {
    //filtering the beers depending on what filtered was pressed
    switch(filter){
      //if the user clicked the High ABV filter, then filter out any beers with ABV lower than 6
      case "High ABV":
        holderBeers = beers.filter((beer) => {
          return beer.abv > 6;
        });
        break;
      //if the user clicked the Classic Range filter, then filter out any beers brewed after 2010
      case "Classic Range":
        holderBeers = beers.filter((beer) => {
          const yearBrewed = beer.first_brewed.split("/");
          return Number(yearBrewed[1]) < 2010;
        });
        break;
      //if the user clicked the Acidic filter, then filter out any beers with a ph lower than 4
      case "Acidic":
        holderBeers = beers.filter((beer) => {
          return beer.ph < 4;
        });
        break;
      //if the user clicked the My Beers filter, then instead of filtering we replace the beers with my beers obtained from myAPI
      case "My Beers":
        holderBeers = myBeers;
        break;
      //default no filtering
      default:
        holderBeers = beers;
        break;
    }
    //setting the filtered beers to the use state
    setFilteredBeers(holderBeers);
  }
  
  //A function that handles the submittion of a new beer to the myAPI API.
  const handleSubmition = (event) => {
    //preventing the default button behavior or refreshing the page
    event.preventDefault();
    //getting the beer name and the tagline from the user, while all other required data is predefined for simplicity
    let beerName = event.target[0].value;
    let tagline = event.target[1].value;
    //creating an object of all the beer information to send to the api
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

    //creating configurations to send the information
    const reqestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({beer: beerObject})
    };

    //posting the submittion to the api then console logging the success status
    fetch("http://localhost:3030/api/submittion", reqestOptions)
    .then(response=>response.json())
    .then(data => console.log(data))
}

  return (
    <div className="App">
      {/* header that displays the logo and a simple title line*/}
      <header>
        <img src={brewdogLogo} alt="Brewdog Brewing Company"/>
        <h1>Great beer that's great for the planet.</h1>
      </header>
      
      {/* main content sections that house the side navigation bar and the beer card display*/}
      <main>
          {/* side navigation the is conditionally rendered and gives the SideNavBar container neccessary properties */}
          <section className='side-nav'>
            {beers && filteredBeers && <SideNavBar searchTerm={searchTerm} handleInput={handleInput} handleFilterBeers={handleFilterBeers} handleSubmition={handleSubmition}/>}
          </section>

          {/* beer card display the is conditionally rendered and gives the BeerCard component neccessary properties */}
          <section className='beer-cards'>
            {beers && filteredBeers && <BeerCard filteredBeersArr={filteredBeers}/>}
 
          </section>
      
      </main>
    </div>
  );
}

export default App;

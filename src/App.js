import './App.css';
import SideNavBar from './containers/SideNavBar/SideNavBar';

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

  useEffect(() => {
    console.log(beers)
  },[beers])

  return (
    <div className="App">
      <SideNavBar />
    </div>
  );
}

export default App;

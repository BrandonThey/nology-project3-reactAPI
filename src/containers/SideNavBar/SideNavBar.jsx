import Button from "../../componets/Button/Button";
import SearchBox from "../../componets/SearchBox/SearchBox";
import BeerSubmitionForm from "../BeerSubmitionForm/BeerSubmitionForm";
import "./SideNavBar.scss"

//SideNavBar container that renders the side navigation bar for the app
const SideNavBar = (props) => {
    //getes a collection of functions and usestates
    const {handleInput, searchTerm, handleFilterBeers, handleSubmition} = props;

    //renders the SearchBox component, filter buttons, and the BeerSubmitionForm
    return(
        <div className="sticky">
            <SearchBox label={"Search"} searchTerm={searchTerm} handleInput={handleInput}/>
            <Button title="All Beers" handleFilterBeers={handleFilterBeers}/>
            <Button title="High ABV" handleFilterBeers={handleFilterBeers}/>
            <Button title="Classic Range" handleFilterBeers={handleFilterBeers}/>
            <Button title="Acidic" handleFilterBeers={handleFilterBeers}/>
            <Button title="My Beers" handleFilterBeers={handleFilterBeers}/>
            <BeerSubmitionForm handleSubmition={handleSubmition} />
        </div>
    )
}

export default SideNavBar;
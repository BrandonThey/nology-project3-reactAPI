import Button from "../../componets/Button/Button";
import SearchBox from "../../componets/SearchBox/SearchBox";
import BeerSubmitionForm from "../BeerSubmitionForm/BeerSubmitionForm";
import "./SideNavBar.scss"

const SideNavBar = (props) => {
    const {handleInput, searchTerm, handleFilterBeers, handleSubmition} = props;

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
import Button from "../../componets/Button/Button";
import SearchBox from "../../componets/SearchBox/SearchBox";
import "./SideNavBar.scss"

const SideNavBar = (props) => {
    const {handleInput, searchTerm, handleFilterBeers} = props;

    return(
        <>
            <SearchBox label={"Search By Name!"} searchTerm={searchTerm} handleInput={handleInput}/>
            <Button title="All Beers" handleFilterBeers={handleFilterBeers}/>
            <Button title="High ABV" handleFilterBeers={handleFilterBeers}/>
            <Button title="Classic Range" handleFilterBeers={handleFilterBeers}/>
            <Button title="Acidic" handleFilterBeers={handleFilterBeers}/>
        </>
    )
}

export default SideNavBar;
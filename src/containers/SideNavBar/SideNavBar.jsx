import Button from "../../componets/Button/Button";
import SearchBox from "../../componets/SearchBox/SearchBox";
import BeerCard from "../../componets/BeerCard/BeerCard";
import "./SideNavBar.scss"

const SideNavBar = (props) => {
    const {handleInput, searchTerm} = props;

    return(
        <>
            <SearchBox label={"Search By Name!"} searchTerm={searchTerm} handleInput={handleInput}/>
            <Button title="All Beers" link=""/>
            <Button title="High ABV" link="highABV"/>
            <Button title="Classic Range" link="classicRange"/>
            <Button title="Acidic" link="acidic"/>
        </>
    )
}

export default SideNavBar;
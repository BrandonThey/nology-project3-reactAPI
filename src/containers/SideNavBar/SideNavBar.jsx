import Button from "../../components/Button/Button";
import "./SideNavBar.scss"
const SideNavBar = () => {

    return(
        <>
            <SearchBox />
            <Button title="All Beers" link=""/>
            <Button title="High ABV" link="highABV"/>
            <Button title="Classic Range" link="classicRange"/>
            <Button title="Acidic" link="acidic"/>
        </>
    )
}

export default SideNavBar;
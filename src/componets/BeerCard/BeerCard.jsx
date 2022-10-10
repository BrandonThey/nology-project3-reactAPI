import "./BeerCard.scss";
import "../../componets/BeerInfo/BeerInfo";
import BeerInfo from "../../componets/BeerInfo/BeerInfo";

//BeerCard component that render the array of beer cards that are shown in the beer card display
const BeerCard = (props) => {
    //getting the filteredBeersArr from the props
    const {filteredBeersArr} = props;

    //for every beer in the filteredBeersArr array we create a BeerInfo component for it
    const mappedBeers = filteredBeersArr.map((beer) => {
        return(
            <div key={beer.id} className='card'>
                <BeerInfo beer={beer}/>
            </div>
        )
    })

    //return the array of beerInfo cards
    return(
        <>
            {mappedBeers}
        </>
    )
}

export default BeerCard;
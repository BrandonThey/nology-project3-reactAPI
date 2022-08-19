import "./BeerCard.scss";
import "../../componets/BeerInfo/BeerInfo";
import BeerInfo from "../../componets/BeerInfo/BeerInfo";

const BeerCard = (props) => {
    const {filteredBeersArr} = props;

    const mappedBeers = filteredBeersArr.map((beer) => {
        return(
            <div key={beer.id} className='card'>
                <BeerInfo beer={beer}/>
            </div>
        )
    })

    return(
        <>
            {mappedBeers}
        </>
    )
}

export default BeerCard;
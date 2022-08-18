import "./BeerCard.scss";
import "../../componets/BeerInfo/BeerInfo";
import BeerInfo from "../../componets/BeerInfo/BeerInfo";

const BeerCard = (props) => {
    const {beersArr} = props;

    const mappedBeers = beersArr.map((beer) => {
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
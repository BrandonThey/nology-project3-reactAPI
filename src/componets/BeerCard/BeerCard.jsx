import "./BeerCard.scss";
import "../../componets/BeerInfo/BeerInfo";
import BeerInfo from "../../componets/BeerInfo/BeerInfo";
import { useState } from "react";

const BeerCard = (props) => {
    const {beersArr} = props;

    const [showInfo, setShowInfo] = useState(false);

    const toggleInfo = () => {
        setShowInfo(!showInfo);
    }

    const mappedBeers = beersArr.map((beer) => {
        return(
            <div key={beer.id} className='card'>
                <BeerInfo beer={beer} showInfo={showInfo} toggleInfo={toggleInfo} />
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
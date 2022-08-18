import "./BeerInfo.scss"
import { useState } from "react";

const BeerInfo = (props) => {
    const { beer} = props;

    const [showInfo, setShowInfo] = useState(false);

    const toggleInfo = () => {
        setShowInfo(!showInfo);
    }

    const lastSentenceIndex = beer.description?.indexOf(".", 150) + 1;

    let shortenedText = beer.description;
    if(lastSentenceIndex > 150){
        shortenedText = beer.description?.substring(0, lastSentenceIndex);
    }

    return(
        <>
            {!showInfo && <h2>{beer.name}</h2>}
            {!showInfo && <img src={beer.image_url} alt={beer.name} />}
            {!showInfo && <p>{beer.tagline}</p>}

            {showInfo && 
            <div className="description">
                <h3>Description:</h3>
                <p>{shortenedText}</p>
            </div>}

            {showInfo &&
            <div className="food-pairings">
                <h3>Great Food Pairings:</h3>
                <p>{beer.food_pairing}</p>
            </div>}

            {!showInfo && <button onClick={toggleInfo}>Learn More!</button>}
            {showInfo && <button onClick={toggleInfo}>Return</button>}
        </>
    )
}

export default BeerInfo;

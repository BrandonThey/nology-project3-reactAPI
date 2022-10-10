import "./BeerInfo.scss"
import { useState } from "react";

//BeerInfo Component that renders the information of an individual beer. 
const BeerInfo = (props) => {
    //getting the beer information from props
    const {beer} = props;

    //a usestate that will allow us to conditionally render information based on a button click
    const [showInfo, setShowInfo] = useState(false);

    //on button click toggle the showInfo use state that will render different information
    const toggleInfo = () => {
        setShowInfo(!showInfo);
    }

    //finding the ending of the nearest sentence to 150 characters
    const lastSentenceIndex = beer.description?.indexOf(".", 150) + 1;

    //if the beer description is too long, then cut it off at the nearest sentence using lastSentenceIndex
    let shortenedText = beer.description;
    if(lastSentenceIndex > 150){
        shortenedText = beer.description?.substring(0, lastSentenceIndex);
    }

    //return the conditionally rendered beer information which includes:
        //initally rendered information: beer name, image, tagline, show more button
        //toggled information: description, food pairings, return button
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

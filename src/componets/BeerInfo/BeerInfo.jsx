import "./BeerInfo.scss"

const BeerInfo = (props) => {
    const { beer, showInfo, toggleInfo } = props;

    return(
        <>
            <h2>{beer.name}</h2>
                {!showInfo && <img src={beer.image_url} alt={beer.name} />}
                <p>{beer.tagline}</p>

                {showInfo && 
                <div>
                    <h3>Description:</h3>
                    <p>{beer.description}</p>
                </div>}

                {showInfo &&
                <div>
                    <h3>Great Food Pairings!</h3>
                    <p>{beer.food_pairing}</p>
                </div>}

                {!showInfo && <button onClick={toggleInfo}>Learn More!</button>}
                {showInfo && <button onClick={toggleInfo}>Return</button>}
        </>
    )
}

export default BeerInfo;

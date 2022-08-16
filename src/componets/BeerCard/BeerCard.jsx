import "./BeerCard.scss"
const BeerCard = (props) => {
    const {beersArr} = props;

    const mappedBeers = beersArr.map((beer) => {
        return(
            <div key={beer.id}>
                <h2>{beer.name}</h2>
                <img src={beer.image_url} alt={beer.name} />
                <p>{beer.tagline}</p>
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
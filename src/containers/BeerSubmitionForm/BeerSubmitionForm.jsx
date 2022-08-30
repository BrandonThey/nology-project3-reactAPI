import "./BeerSubmitionForm.scss";

const BeerSubmitionForm = (props) => {
    let {handleSubmition} = props;
    return(
        <>
            <h2>Submit a beer!</h2>
            <form className="beer-form" onSubmit={handleSubmition}>
                <label htmlFor="beerName">Beer Name</label>
                <input type="text" name="beerName"></input>
                <label htmlFor="beerName">Tagline</label>
                <input type="text" name="tagline"></input>
                <button>Submit!</button>
            </form>
        </>
    )
}
export default BeerSubmitionForm;
import "./BeerSubmitionForm.scss";

//BeerSubmitionForm container that renders a form for users to submit the name and tagline of a new beer to the myAPI API.
const BeerSubmitionForm = (props) => {
    //gets the handle submition function from app.jsx that will post the beer information
    let {handleSubmition} = props;

    //returns a form with input boxes and labels
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
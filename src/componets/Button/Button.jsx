import "./Button.scss";

//simple button component that takes a button title(inside text), and function on click
const Button = (props) => {
    const {title, handleFilterBeers} = props;

    return(
        <p className="side-nav__p" onClick={()=> {
            handleFilterBeers(title);
        }}>
        {title}
        </p>
    )
}

export default Button;
import "./Button.scss";
const Button = (props) => {
    const {title, handleFilterBeers} = props;

    return(
        <p onClick={()=> {
            handleFilterBeers(title);
        }}>
        {title}
        </p>
    )
}

export default Button;
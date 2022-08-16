import "./Button.scss";

import {Link} from "react-router-dom";

const Button = (props) => {
    const {title, link} = props;

    return(
        <Link to={`/${link}`}>{title}</Link>
    )
}

export default Button;
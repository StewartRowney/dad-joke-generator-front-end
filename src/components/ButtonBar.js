import "../App.css"
import { Link } from "react-router-dom";

const ButtonBar = (props) => {
    return (
    <div className="Button-bar">
        <div className="Button-bar-text">
            <h4 className="Button-bar-text-text">{props.name}</h4>
        </div>
        <div className="Button-bar-buttons">
            <Link to="/" className="Button-bar-buttons-button">Home</Link>
            <Link to="/login" className="Button-bar-buttons-button">Login</Link>
        </div>
    </div>
    );
}

export default ButtonBar;
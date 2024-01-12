import "../App.css"
import { Link, Outlet } from "react-router-dom";
import AuthContext from "../AuthContext";
import { useContext } from "react";

const ButtonBar = () => {

    const {name, setName} = useContext(AuthContext);

    return (
        <>
            <div className="Button-bar">
                <div className="Button-bar-text">
                    <h4 className="Button-bar-text-text">{name}</h4>
                </div>
                <div className="Button-bar-buttons">
                    <Link to="/" className="Button-bar-buttons-button">Home</Link>
                    <Link to="/login" className="Button-bar-buttons-button">Login</Link>
                </div>
            </div>
            <Outlet/>
        </>
    );
}

export default ButtonBar;
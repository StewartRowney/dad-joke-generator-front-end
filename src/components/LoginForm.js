import { Link } from "react-router-dom";
import { useState } from "react";

const LoginForm = (props) => {

    const [currentName, setCurrentName] = useState("");

    const login = () => {
        if (currentName) {
            console.log(currentName)
            props.setName(currentName);
        }
    };

    const nameChange = (event) => {
        setCurrentName(event.target.value);
    };

    return (
        <div>
            <div className="login-form-div">  
                <div className="login-form-item-div-left">
                    <text className="login-form-text">Name</text>
                </div>
                <div className="login-form-item-div-right">
                    <input type="text" className="login-form-input" placeholder="Gerald" onChange={nameChange}></input>
                </div>
            </div>
            <div className="login-form-div">
                <div className="login-form-item-div-left"><
                    text className="login-form-text">Password</text>
                </div>
                <div className="login-form-item-div-right">
                    <input type="password" className="login-form-input"></input>
                </div>
            </div>
            <div style={{display:"inline-flex"}}>
                <Link to="/" onClick={login} className="Joke-button">Login</Link>
            </div>
        </div>
    )
}

export default LoginForm;
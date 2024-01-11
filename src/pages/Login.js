import ButtonBar from "../components/ButtonBar";
import LoginForm from "../components/LoginForm";
import PageTitle from "../components/PageTitle";

const Login = (props) => {
    return (
        <div className="App">
            <ButtonBar name={props.name}></ButtonBar>
            <PageTitle title="Login"></PageTitle>
            <LoginForm setName={props.setName}></LoginForm>
        </div>
    )
}

export default Login;
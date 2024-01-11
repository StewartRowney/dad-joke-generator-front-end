import ButtonBar from "../components/ButtonBar";
import JokeGenerator from "../components/JokeGenerator";
import JokeHeader from "../components/JokeHeader";

const Home = (props) => {
    return (
    <div className="App">
      <ButtonBar name={props.name}></ButtonBar>
      <JokeHeader></JokeHeader>
      <JokeGenerator></JokeGenerator>
    </div>
    );
}

export default Home;
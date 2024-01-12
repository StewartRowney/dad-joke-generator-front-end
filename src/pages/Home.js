import JokeGenerator from "../components/JokeGenerator";
import JokeHeader from "../components/JokeHeader";

const Home = () => {
    return (
    <div className="App">
      <JokeHeader></JokeHeader>
      <JokeGenerator></JokeGenerator>
    </div>
    );
}

export default Home;
import './App.css';
import JokeGenerator from './components/JokeGenerator';
import JokeHeader from './components/JokeHeader';

function App() {
  return (
    <div className="App">
      <JokeHeader></JokeHeader>
      <JokeGenerator></JokeGenerator>
    </div>
  );
}

export default App;

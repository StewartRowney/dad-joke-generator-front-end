import JokeItem from "./JokeItem";
import { useState } from "react";

const JokeGenerator = () => {

    const [joke, setJoke] = useState("");
    const URL = "https://icanhazdadjoke.com/";
  
    const generateJoke = () => {
      fetch(URL, {headers: {
        'Accept': 'application/json'
      }})
      .then(r => r.json())
      .then(response => {
        setJoke(response.joke, console.log(response.joke));
      })
      .catch(rejected => {
        console.log(rejected);
      });
    }

    return(
        <div>
            <button onClick={generateJoke} className="Joke-button">Generate</button>
            <JokeItem joke={joke}></JokeItem>
        </div>
    )
 }

 export default JokeGenerator;
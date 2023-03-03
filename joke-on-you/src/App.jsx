import { useEffect, useState } from 'react';
import './App.css';
import JokeList from './Components/JokeList';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
    .then((res) => res.json())
    .then((data) => setJokes(data.jokes));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
          <h1 className="joke-h1">&#129313;Joke on you&#129313;</h1>
          <div className="all-jokes">
            <JokeList className="jokes" jokes={jokes} />
          </div>
      </header>
    </div>
  );
}

export default App;

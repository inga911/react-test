import Joke from "./Joke"

function JokeList({jokes}) {
    return (
        <div>
            {jokes.map((joke) => (<Joke joke={joke}/>))}
        </div>
    )
}
export default JokeList
function Joke({joke}) {



  return (
    <div>
      <h5 className="single-joke">{joke.joke}</h5>
      <div>
        <h5 className="two-part">{joke.setup}</h5>
        <p className="two-part-answ">{joke.delivery}</p>
      </div> 
    </div>
  )
}
export default Joke;
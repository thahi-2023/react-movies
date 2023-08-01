
import Form from "./components/Form"
import MovieDisplay from "./components/MovieDisplay"
import { useState } from "react"
import { useEffect } from "react"



function App() {

  const apiKey = "44011384";

  const [movie,setMovie] = useState(null)

  const getMovie = async (searchTerm) =>{
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
      const movie = await response.json();
      // console.log(data)
      setMovie(movie)


    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getMovie('shrek')
  }, [])

  return (
    <div>
    <Form movieSearch={getMovie}/>
    <MovieDisplay movie={movie} />
    </div>
  )
}

export default App
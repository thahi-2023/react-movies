import Form from "./components/Form"
import MovieDisplay from "./components/MovieDisplay"
import {useState, useEffect} from 'react'
import styled from 'styled-components'



function App() {
  const apiKey ='edc05d37'
  const [movie, setMovie] = useState(null)

  const getMovie =async (searchTerm) => {
    try {
  const response = await fetch (`http://www.omdbapi.com/?apikey=$(apiKey&t=$(searchTerm)`)
  const data = await response.json();
  setMovie(data)

    }catch (error) {
      console.log(error)

    }
  }

  useEffect(()=> {
    getMovie('shrek')
  },[])

  return (
    <>
   <Form movieSearch= {getMovie}/>
   
   <MovieDisplay movie={movie}/>   
     
     
    </>
  )
}

export default App

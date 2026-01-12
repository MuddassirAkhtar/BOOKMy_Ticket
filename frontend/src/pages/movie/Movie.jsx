import React from 'react'
import styles from "./movies.module.css"
import DisplayEvents from "../../components/displayEvents/DisplayEvents"
import { useSelector } from 'react-redux'

const Movie = () => {
const movies = useSelector((state)=> state.movieReducer.movie)

  return (
    <div>
      <DisplayEvents title="Movies" data={movies} />
    </div>
  )
}

export default Movie
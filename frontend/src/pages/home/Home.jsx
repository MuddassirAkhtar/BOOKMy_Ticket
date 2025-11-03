import React from 'react'
import styles from "./home.module.css"
import Scrollsection from '../../components/scrollSection/Scrollsection'
import { useSelector } from 'react-redux'

const Home = () => {


           const movies =  useSelector((state)=> state.movieReducer.movie)
           const events =  useSelector((state)=> state.eventReducer.event)
           const sports =  useSelector((state)=> state.sportsReducer.sports)
  
  return (
    <div className={styles.homeContainer}>
      <h1>Recomended Movies</h1>
        <Scrollsection title="Movies" data={movies} />
        <h1>EventsSection</h1>
        <Scrollsection title="Events" data={events} />
        <h1>SportsSection</h1>
        <Scrollsection  title="Sports" data={sports}/>
    </div>
  )
}

export default Home
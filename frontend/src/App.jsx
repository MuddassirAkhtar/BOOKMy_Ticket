import {React,useEffect} from 'react'
import MainRoutes from './Routes/MainRoutes'
import Nav from "./components/navBar/Nav"
import Hero from './components/hero/Hero'
import {useDispatch} from "react-redux"
import {asyncLoadMovie} from "./store/actions/movieAction"
import { asyncLoadEvent } from './store/actions/eventAction'
import { asyncLoadSports } from './store/actions/sportsAction'

const App = () => {
const dispatch = useDispatch();
  useEffect(() => {
    
  dispatch(asyncLoadMovie())
  dispatch(asyncLoadEvent())
  dispatch(asyncLoadSports())
    
  }, [])
  
  return (
    <div>
      <Nav />
      <Hero />
      <MainRoutes/>
    </div>
  )
}

export default App
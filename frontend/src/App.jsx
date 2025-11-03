import {React,useEffect} from 'react'
import MainRoutes from './Routes/MainRoutes'
import Nav from "./components/navBar/Nav"
import Hero from './components/hero/Hero'
import {useDispatch} from "react-redux"
import {asyncLoadMovie} from "./store/actions/movieAction"
import { asyncLoadEvent } from './store/actions/eventAction'
import { asyncLoadSports } from './store/actions/sportsAction'
import AuthModel from './components/Auth/AuthModel'
import { useSelector } from 'react-redux'
import { asyncloadUsers } from './store/actions/authAction'

const App = () => {

const isAuthModelOpen = useSelector(
    (state) => state.authReducer.isAuthModelOpen
  );
const dispatch = useDispatch();
  useEffect(() => {
    
  dispatch(asyncLoadMovie())
  dispatch(asyncLoadEvent())
  dispatch(asyncLoadSports())
  dispatch(asyncloadUsers())
    
  }, [])
  
  return (
    <div>
      <Nav />
      <MainRoutes/>
      {isAuthModelOpen && <AuthModel />} 
    </div>
  )
}

export default App
import React, {useEffect} from 'react'
import MainRoutes from './Routes/MainRoutes'
import Nav from "./components/navBar/Nav"
import Hero from './components/hero/Hero'
import {useDispatch} from "react-redux"
import {asyncLoadMovie} from "./store/actions/movieAction"
import { asyncLoadEvent } from './store/actions/eventAction'
import { asyncLoadSports } from './store/actions/sportsAction'
import AuthModel from './components/Auth/AuthModel'
import { useSelector } from 'react-redux'
import { asyncloadUsers, asyncAutoLoginUser } from './store/actions/authAction'
import { useLocation } from "react-router";
import './index.css'
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
  dispatch(asyncAutoLoginUser())
    
  }, [])
        const location = useLocation();
        const heroRoutes =["/" , "/movie", "/sports", "/events"]
  
  return (


    <div className="container">
      <Nav />
        {heroRoutes.includes(location.pathname) && <Hero />}


      <MainRoutes/>
      {isAuthModelOpen && <AuthModel />} 
    </div>
  )
}

export default App
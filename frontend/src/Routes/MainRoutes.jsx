import React from 'react'
import { Routes,Route } from 'react-router'
import Home from "../pages/home/Home"
import Movie from "../pages/movie/Movie"
import Event from "../pages/events/Event"
import Sports from "../pages/sports/Sports"
const MainRoutes = () => {
  return (
    <div>
          <Routes>
                    <Route path="/" element= {<Home/>} />
                    <Route path="/movie" element= {<Movie/>} />
                    <Route path="/events" element= {<Event/>} />
                    <Route path="/sports" element= {<Sports/>} />
          </Routes>
    </div>
  )
}

export default MainRoutes
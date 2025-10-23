import React from 'react'
import MainRoutes from './Routes/MainRoutes'
import Nav from "./components/navBar/Nav"
import Hero from './components/hero/Hero'
const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <MainRoutes/>
    </div>
  )
}

export default App
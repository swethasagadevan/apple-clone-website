import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Mainsection from './components/Mainsection'
import Slidersection from './components/Slidersection'


function App() {
  

  return (
    <>
      
      <Navbar/>
      <Hero/>
      <Mainsection/>
      <Slidersection/>
      <Footer/>
      {/* section,button,footer */}
    </>
  )
}

export default App

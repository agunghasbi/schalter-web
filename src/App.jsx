import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import EventPilihan from './components/EventPilihan'
import EventTerbaru from './components/EventTerbaru'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <EventPilihan />
      <EventTerbaru />
      <Footer />
    </>
  )
}

export default App

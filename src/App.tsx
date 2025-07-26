import { useState } from 'react'
import Header from './Pages/Header'
import Hero from './Pages/Hero'
import About from './Pages/About'
import Highlights from './Pages/Highlights'
import Schedule from './Pages/Schedule'
import Gallery from './Pages/Gallery'
import Sponsors from './Pages/Sponsors'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Highlights />
      <Schedule />
      <Gallery />
      <Sponsors />
      <Contact />
      <Footer />
    </>
  )
}

export default App
import { useState } from 'react'
import './App.css'

import NavBar from './Components/NavBar'
import Header from './Components/Header'
import Hero from './Components/Hero'
import SubHero from './Components/SubHero'
import Card1 from './Components/Cards1'
import Card2 from "./Components/Cards2"
import Card3 from './Components/Cards3'
import Card4 from './Components/Cards4'
import Card5 from './Components/Cards5'
import Card6 from './Components/Cards6'
import About from './Components/About'
import Footer from './Components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Header />
      <Hero />
      <SubHero />
      <div className="flex gap-5 flex-wrap">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
        <Card6 />
      </div>
      <About />
      <Footer />


    </>
  )
}

export default App

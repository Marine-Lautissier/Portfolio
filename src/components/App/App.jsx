import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Presentation from '../Presentation/Presentation'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Footer from '../Footer/Footer'

import './App.css'

function App() {

  return (
    <>
    <div className='main'>
    <Navbar />
    <Header />
    <Presentation />
    <Skills />
    <Projects />
    <Footer />
    </div>
    </>
    
  )
}

export default App

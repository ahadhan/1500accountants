import React from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Industries from './components/industries/Industries'
import Process from './components/process/Process'
import Contact from './components/contact/contact'
import Footer from './components/footer/Footer'
import './index.css'

function App() {

  return (
    <>
      <Header />
      <div>
        <Hero />
        <Services />
        <Industries />
        <Process />
        <Contact />
        <Footer/>
      </div>
    </>
  )
}

export default App

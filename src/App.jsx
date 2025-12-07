import React from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Industries from './components/industries/Industries'
import Process from './components/process/Process'
import Contact from './components/contact/contact'
import ScheduleForm from './components/scheduleForm/scheduleForm'
import Footer from './components/footer/Footer'
import FloatingWhatsappButton from './components/whatsappButton/WhatsappButton'
import './index.css'

function App() {

  return (
    <>
      <Header />
      <div>
        <Hero />
        <FloatingWhatsappButton/>
        <Services />
        <Industries />
        <Process />
        <ScheduleForm />
        <Contact />
        <Footer/>
      </div>
    </>
  )
}

export default App

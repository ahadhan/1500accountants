import React from 'react'
import HeroImg from '../../assets/images/founder-bg.png'
import Shapes from '../../assets/images/shapes.png'

export default function Hero() {

  return (
    <section id='home' className="flex lg:flex-row items-center justify-center space-between min-h-screen text-center bg-bg font-sans p-8">
      <div className="max-w-3xl w-full flex flex-col items-center mx-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text">
          {/* Headline */}
          Say Hello to a Higher Standard of Online Accounting
        </h1>
        <p className='text-3xl font-bold text-blue-500 my-2'>
          Expertly Powered by Licensed CPAs
        </p>
        <p className="text-lg md:text-2xl mb-8 text-text-muted">
          {/* Subheadline */}
          One consultation could save your business thousands-book your free session today
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#scheduleForm" className="flex items-center ">
          <button  className="font-semibold text-xl py-3 px-8 rounded-xl transition bg-blue-500 text-white cursor-pointer hover:bg-white hover:text-blue-500 transform duration-300" >
            Schedule My Free Consultation
          </button>
          </a>
          <button className="font-semibold py-3 px-8 rounded border transition bg-btn-light text-btn-light-text border-border hover:btn-light">
            Learn More
          </button>
        </div>
      </div>

      <div className="bg-bg-alt w-auto rounded-2xl h-auto m-4 z-0">
        <div className="image relative overflow-hidden rounded-2xl px-10" >
          <img src={HeroImg} alt="Hero Image" className="w-full h-auto " />
          <img src={Shapes} alt="Shapes" className='absolute -top-30 -right-70 z-10 overflow-clip' />
        </div>
      </div>
    </section>
  )
}

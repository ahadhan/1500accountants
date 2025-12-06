import React from 'react'
import HeroImg from '../../assets/images/hero-home.webp'

export default function Hero() {

  return (
     <section id='home' className="flex sm:flex-col lg:flex-row items-center space-between min-h-screen text-center  bg-bg font-sans p-10">
      <div className="max-w-3xl w-full flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-text">
          {/* Headline */}
          Your Modern Finance Platform
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-text-muted">
          {/* Subheadline */}
          Streamline your business finances with powerful, easy-to-use tools.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="font-semibold py-3 px-8 rounded transition bg-btn-dark text-btn-dark-text hover:btn-light">
            Get Started
          </button>
          <button className="font-semibold py-3 px-8 rounded border transition bg-btn-light text-btn-light-text border-border hover:btn-light">
            Learn More
          </button>
        </div>
      </div>

      <div className="bg-bg-alt w-full rounded-2xl h-auto m-4">
        <div className="image">
          <img src={HeroImg} alt="Hero Image" className="w-full h-auto ml-4 mt-4 -mr-4 -mb-4" />
        </div>
      </div>
    </section>
  )
}

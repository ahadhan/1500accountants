import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'

const SERVICES = [
  {
    id :  'accounting',
    title: 'Accouting',
    desc: 'Bookkeeping, financial, reporting and tax-ready statements',
    gradient: 'bg-gradient-to-r from-purple-800 via-pink-800 to-red-600',
  },
  {
    id :  'tax',
    title: 'Tax Consultation',
    desc: 'US, UK and European tax compliance for cross-border clients',
        gradient: 'bg-gradient-to-r from-red-600 via-pink-800 to-purple-800',
  },
  {
    id :  'payroll',
    title: 'Payroll Services',
    desc: 'Accurate payroll processing and management for your team',
    gradient: 'bg-gradient-to-r from-purple-800 via-pink-800 to-red-600',
  },
  {
    id: 'advisory',
    title: 'Financial Advisory',
    desc: 'Cashflow planning, forecasting and strategic advice',
    gradient: 'bg-gradient-to-r from-red-600 via-pink-800 to-purple-800',
  },
  {
    id: 'audit',
    title: 'Auditor',
    desc: 'Internal and external audit support and compliance services',
    gradient: 'bg-gradient-to-r from-purple-800 via-pink-800 to-red-600',
  },
]

export default function Services() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SERVICES.length);  
    }, 4000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [] 
  
  );

  return ( 
    <section className='w-full py-20 text-text bg-bg'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='text-4xl font-bold text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-16'>Our Services</h2>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-out" style={{transform: `translateX(-${currentIndex * 100}%)`}}>
            {SERVICES.map((service) => (  
              <div key={service.id} className="min-w-full flex-shrink-0 px-4">  
                <div
                  className={`${service.gradient} rounded-2xl p-8 shadow-2xl min-h-64 flex flex-col justify-between transform hover:scale-105 transition-transform duration-300`}
                  // style={{background: service.gradient}}
                >
                  <div>
                    <h3 className='text-5xl font-bold text-blue-500 mb-4 '>{service.title}</h3>
                    <p className='text-white text-opacity-90 text-lg'>{service.desc}</p>

                  </div>
                  <button className='mt-6 text-sm p-4 border-2 border-blue-500 rounded-2xl bg-white text-black bg-opacity-90 hover:backdrop-blur-sm transition w-fit'>
                    Learn More
                  </button>
                </div>
                </div>
            ))
            }
          </div>
        </div>
        </div>

      </div>
    </section>
  )
}
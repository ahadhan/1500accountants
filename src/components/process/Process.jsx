import React from 'react';
import { motion } from 'framer-motion';

import ConsultationImg from '../../assets/images/consultation.jpg';
import StrategyImg from '../../assets/images/strategy.jpg';
import SupportImg from '../../assets/images/support.jpg';



const Process = () => {
  return (
    <section className='w-full py-20 text-text bg-bg'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-10'>Our Process</h2>

        <div className='grid grid-cols-1 md:grid-cols-1 gap-8'>
          
          {/* 1 — Consultation */}
          <div className='flex flex-row mb-8 rounded-lg'>

            {/* TEXT slides LEFT → RIGHT */}
            <div
               className='flex-1 bg-bg-alt p-6 shadow-md'
            >
              <h3 className='text-3xl font-semibold my-5'>1. Consultation</h3>
              <p className='text-gray-300 text-5xl font-black text-center'>
                We begin by understanding your business needs and financial goals through a detailed consultation.
              </p>
            </div>

            {/* IMAGE slides RIGHT → LEFT */}
            <div
              className='flex-none w-1/2 overflow-hidden'
            >
              <img
                src={ConsultationImg}
                alt='Consultation'
                className='w-full h-full object-cover'
              />
            </div>
          </div>

          {/* 2 — Strategy (reversed layout) */}
          <div className='flex flex-row-reverse mb-8 rounded-lg'>

            {/* TEXT slides RIGHT → LEFT */}
            <div
              className='flex-1 bg-bg-alt p-6 shadow-md'
            >
              <h3 className='text-3xl font-semibold my-5'>2. Strategy Development</h3>
              <p className='text-gray-300 text-5xl font-black text-center'>
                Our team crafts a tailored financial strategy designed to optimize your cash flow and growth potential.
              </p>
            </div>

            {/* IMAGE slides LEFT → RIGHT */}
            <div
              className='flex-none w-1/2 overflow-hidden'
            >
              <img
                src={StrategyImg}
                alt='Strategy Development'
                className='w-full h-full object-cover'
              />
            </div>
          </div>

          {/* 3 — Support */}
          <div className='flex flex-row mb-8 rounded-lg'>

            {/* TEXT slides LEFT → RIGHT */}
            <div
             className='flex-1 bg-bg-alt p-6 shadow-md'
            >
              <h3 className='text-3xl font-semibold mb-4'>3. Implementation & Support</h3>
              <p className='text-gray-300 text-5xl font-black'>
                We implement the strategy and provide ongoing support to ensure your financial success.
              </p>
            </div>

            {/* IMAGE slides RIGHT → LEFT */}
            <div
              className='flex-none w-1/2 overflow-hidden'
            >
              <img
                src={SupportImg}
                alt='Implementation & Support'
                className='w-full h-full object-cover'
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;

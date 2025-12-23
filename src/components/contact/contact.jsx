// import React from 'react'

// const contact = () => {
//   return (
//     <section className='w-full py-20 text-text bg-bg-alt'>
//         <div className='max-w-6xl mx-auto px-4'>
//             <h2 className='text-3xl md:text-4xl font-bold text-center mb-10'>Contact Us</h2>
//             <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
//                 <div className='w-full md:w-1/2 bg-bg p-6 rounded-lg border-2 border-blue-500 shadow-md'>
//                     <h3 className='text-2xl font-semibold mb-4'>Get in Touch</h3>
//                     <p className='mb-4'>We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.</p>
//                     <form className='flex flex-col gap-4'>
//                         <input type='text' placeholder='Your Name' className='p-3 border border-blue-500 rounded-lg' required />
//                         <input type='email' placeholder='Your Email' className='p-3 border border-blue-500 rounded-lg' required />
//                         <textarea placeholder='Your Message' className='p-3 border border-blue-500 rounded-lg h-32' required></textarea>
//                         <button type='submit' className='bg-blue-700 text-white p-3 rounded-lg hover:bg-primary-dark transition'>Send Message</button>
//                     </form>
//                 </div>
//                 <div className='w-full md:w-1/2 bg-bg border-2 border-blue-500 p-6 rounded-lg shadow-md'>
//                     <h3 className='text-2xl font-semibold mb-4'>Contact Information</h3>
//                     <p className='mb-2'>Email: ahadkhanmay@gmail.com</p>
//                     <p className='mb-2'>Phone: +123 456 7890</p>
//                     <p className='mb-2'>Address: 123 Main St, Anytown, USA</p>
//                     <div className='mt-4'>
//                         <h4 className='text-xl font-semibold mb-2'>Follow Us</h4>
//                         <div className='flex gap-4'> 
//                             <a href='#' className='text-primary hover:underline'>Facebook</a>
//                             <a href='#' className='text-primary hover:underline'>Twitter</a>
//                             <a href='#' className='text-primary hover:underline'>LinkedIn</a>
//                         </div>    
//                         </div>
//                     </div>
//                 </div>
//             </div>

//     </section>
//   )
// }

// export default contact


import React from "react";
import MapImg from "../../assets/images/map.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Contact = () => {
  return (
    <section 
    id="contact"
    className="w-full py-20 text-text bg-bg-alt">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Contact Us
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">

          {/* Contact Form Card */}
          <div className="
              w-full md:w-1/2 bg-bg p-6 rounded-lg border-2 border-blue-500 shadow-md 
              transition-all duration-300
              hover:shadow-[0_0_25px_5px_rgba(0,150,255,0.7)]
              hover:border-blue-400
              hover:scale-[1.03]
            "
          >
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-4">
              We would love to hear from you! Whether you have a question,
              feedback, or just want to say hello, feel free to reach out.
            </p>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-blue-500 rounded-lg bg-bg"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-blue-500 rounded-lg bg-bg"
                required
              />
              <textarea
                placeholder="Your Message"
                className="p-3 border border-blue-500 rounded-lg h-32 bg-bg"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info + Map Card */}
          <div className="
              w-full md:w-1/2 bg-bg border-2 border-blue-500 p-6 rounded-lg shadow-md
              transition-all duration-300
              hover:shadow-[0_0_25px_5px_rgba(0,150,255,0.7)]
              hover:border-blue-400
              hover:scale-[1.03]
            "
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-2">Email: ahadkhanmay@gmail.com</p>
            <p className="mb-2">Phone: +123 456 7890</p>
            <p className="mb-2">Address: 123 Main St, Anytown, USA</p>

            <div className="mt-4">
              <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-primary hover:underline">
                    <FaFacebook />
                </a>
                <a href="#" className="text-primary hover:underline">
                    <FaXTwitter />
                </a>
                <a href="#" className="text-primary hover:underline">
                    <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Map Placeholder / Image */}
            <div className="mt-6 w-full h-48 rounded-lg overflow-hidden border border-blue-400 shadow-inner">
              <img
                src={MapImg}
                alt="map"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

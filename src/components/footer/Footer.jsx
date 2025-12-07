import React from 'react'

const Footer = () => {
  return (
    <footer id="footer" className="bg-bg text-text py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-semibold">1500Accountants.com</h1>
          <p className="text-sm mt-2">&copy; 2025. All rights reserved.</p>
        </div>

        {/* NAV LINKS */}
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-blue-500 transition">Home</a>
          <a href="#services" className="hover:text-blue-500 transition">Services</a>
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          <a 
            href="https://wa.me/447403055269" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-500 transition"
          >
            WhatsApp
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer

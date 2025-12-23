import React from "react";
import HeroImg from "../../assets/images/founder-bg.png";
import Shapes from "../../assets/images/shapes.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        flex flex-col lg:flex-row
        items-center justify-center
        gap-10 lg:gap-14
        min-h-[90vh] lg:min-h-screen
        text-center lg:text-left
        bg-bg font-sans
        px-4 sm:px-6 lg:px-8
        py-12 sm:py-16 lg:py-0
      "
    >
      {/* LEFT */}
      <div className="max-w-3xl w-full flex flex-col items-center lg:items-start mx-0 lg:mx-5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text">
          Say Hello to a Higher Standard of Online Accounting
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500 my-2">
          Expertly Powered by Licensed CPAs
        </p>

        <p className="text-base sm:text-lg md:text-2xl mb-8 text-text-muted leading-relaxed">
          One consultation could save your business thousands-book your free session today
        </p>

        {/* Buttons: stack on mobile, row on sm+ */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="#scheduleForm" className="flex w-full sm:w-auto">
            <button className="w-full sm:w-auto font-semibold text-lg sm:text-xl py-3 px-6 sm:px-8 rounded-xl transition bg-blue-500 text-white cursor-pointer hover:bg-white hover:text-blue-500 transform duration-300">
              Schedule My Free Consultation
            </button>
          </a>

          <button className="w-full sm:w-auto font-semibold text-lg py-3 px-6 sm:px-8 rounded border transition bg-btn-light text-btn-light-text border-border">
            Learn More
          </button>
        </div>
      </div>


      {/* RIGHT */}
      <div className="bg-bg-alt w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl h-auto m-0 sm:m-4 z-0">
        <div className="image relative overflow-hidden rounded-2xl px-4 sm:px-6 py-4 sm:py-6">
          <img
            src={HeroImg}
            alt="Hero Image"
            className="w-full h-auto object-contain"
          />

          {/* Shapes */}
          <img
            src={Shapes}
            alt="Shapes"
            className="
        absolute
        -top-8 sm:-top-12
        -right-24 sm:-right-36 md:-right-36
        w-44 sm:w-56 md:w-72
        z-10
        opacity-90
        pointer-events-none
        hidden sm:block
      "
          />
        </div>
      </div>

    </section>
  );
}

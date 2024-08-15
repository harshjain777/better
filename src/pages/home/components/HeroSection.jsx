import React from 'react';
import center from '../../../assets/center.webp';

function HeroSection() {
  return (
    <div className="bg-[#1b4634] rounded-b-lg relative w-full h-[91.5vh]">
      <div className="flex flex-col justify-center items-center h-[20%] md:h-[60%] z-20 text-[#81df83] text-5xl md:text-9xl font-bold relative">
        <div>Mortgages</div>
        <div>made simple</div>
      </div>
      <img 
        src={center} 
        className="w-[80%] md:w-[27%] absolute bottom-0 md:left-1/2 left-2/3 transform -translate-x-1/2 z-10" 
        alt="center" 
      />

      <div className="flex flex-col md:flex-row items-center w-full justify-around gap-10 ">

        <div className="flex items-center flex-col gap-3">
        <button className='bg-[#81df83] rounded-3xl capitalize   z-20 text-xl px-5 py-4 hover:bg-transparent hover:text-white duration-200 ease-in-out'>start my approval</button>
        <div className=" font-light z-20 text-zinc-300 text-md">3 min | No credit impact</div>
        </div>

        <div className="review! ">
          Google review!
        </div>

      </div>

    </div>
  );
}

export default HeroSection;

import React, { useState } from 'react';
import imgs1 from '../../../assets/person1.webp';
import imgs2 from '../../../assets/person2.webp';
import imgs3 from '../../../assets/person3.webp';

function HeroSection2() {
  const [selected, setSelected] = useState("arian"); // Default selected item

  const imageMap = {
    arian: imgs1,
    amanda: imgs2,
    paul: imgs3,
  };

  return (
    <div className='bg-white flex flex-col md:flex-row items-center justify-center  md:gap-56 gap-20 w-full py-20'>
      
      {/* Mobile View */}
      <div className="rightwala md:hidden flex flex-col items-center px-2 gap-5">
        <div className="text-[#2d2f2d] capitalize text-left text-[10vw] font-semibold">
          Find out why we're better.
        </div>
        <button className='bg-[#1b4634] text-white w-[70%] rounded-3xl text-2xl px-5 py-4 hover:bg-[#81df83] duration-200 ease-in-out'>
          see all our stories
        </button>
        <div className="px-5">Excellent 4.3 out of 5</div>
      </div>

      {/* Main Content */}
      <div className='md:w-[22%] w-[50%] flex flex-col items-center gap-10'>
        <img src={imageMap[selected]} alt="Selected Person" className='rounded-xl' />

        <div className="flex items-center gap-5">
          {["arian", "amanda", "paul"].map((name, index) => (
            <div
              key={index}
              onClick={() => setSelected(name)}
              className={`px-2 py-1 text-[5vw] md:text-xl capitalize rounded-full cursor-pointer transition border-2 duration-150 ease-in-out ${selected === name ? 'border-[#81df83] text-[#81df83]' : 'border-zinc-800'}`}
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="rightwala hidden md:flex flex-col items-start px-2 gap-10">
        <div className="text-[#2d2f2d] capitalize text-5xl lg:text-8xl font-semibold">
          <div>Find out why</div>
          <div>we're better.</div>
        </div>
        <button className='bg-[#1b4634] text-white rounded-3xl text-2xl px-5 py-4 hover:bg-[#81df83] duration-200 ease-in-out'>
          see all our stories
        </button>
        <div className="px-5">Excellent 4.3 out of 5</div>
      </div>
      
    </div>
  );
}

export default HeroSection2;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Design from './mini/Design';

function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (item) => {
    if (item === 'calculator') {
      navigate('/calculator');
    }
    // Add more navigation logic if needed
  };

  return (
    <div className='w-full py-10'> 
      <div className="aboveOne flex flex-col md:flex-row justify-between px-20 items-center">
        <div className="md:text-5xl text-4xl font-semibold capitalize">
          <div className="">got any question</div>
          <div className="">we've got answer</div>
        </div>
                 
        <div className="flex items-center mt-16 gap-5">
          {
            ["our product", "calculator", "guides and FAQs"].map((i, index) => (
              <div 
                key={index} 
                onClick={() => handleNavigation(i)} 
                className='font-semibold capitalize border-2 border-zinc-800 px-1 text-center md:px-2 py-1 rounded-full text-md md:text-xl cursor-pointer hover:border-[#81df83] hover:text-[#81df83]'>
                {i}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Footer;

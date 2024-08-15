import React from 'react'
import bw from '../../../assets/bw.jpg'

function Herosection2() {
  return (
    <div className='h-[91vh] flex items-center justify-around px-10 '>

        <div className="flex flex-col items-start px-20 gap-10">
            <div className="text-center uppercase font-bold text-green-900 text-5xl">The status quo is broken</div>

            <div className=" text-2xl w-[80%]">The traditional processes around homeownership are opaque and stressful. Fees aren't transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It's a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.</div>
            <button className='text-white bg-green-900 hover:bg-green-800 px-2 py-3 rounded-lg text-xl capitalize'>read vishal's sstory</button>
        </div>





        <div className="">
            <img src={bw} className='w-[100rem] h-[25rem] shadow-lg  rounded-xl' alt="bw" />
        </div>
      
    </div>
  )
}

export default Herosection2

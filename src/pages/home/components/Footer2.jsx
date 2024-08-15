import React from 'react';
import { Link } from 'react-router-dom';

function Footer2() {
  return (
    <div className='w-full border-t-[1px] border-zinc-800 flex justify-around mt-20 py-20'>
      
      <div className="flex w-[25%] flex-col items-start gap-5">
        <div className="text-green-800 font-bold tracking-tighter text-4xl">Better</div>
        <div>Better is a family of companies serving all your homeownership needs.</div>
        <div className="flex items-center gap-1">
          <div className="text-green-800 font-bold tracking-tighter text-2xl">Better</div>
          <div className="text-2xl capitalize text-zinc-300">mortgage</div>
        </div>
        <div>We can't wait to say “Welcome home.” Apply 100% online, with expert customer support.</div>
        {/* Repeated content */}
        <div className="flex items-center gap-1">
          <div className="text-green-800 font-bold tracking-tighter text-2xl">Better</div>
          <div className="text-2xl capitalize text-zinc-300">mortgage</div>
        </div>
        <div>We can't wait to say “Welcome home.” Apply 100% online, with expert customer support.</div>
        <div className="flex items-center gap-1">
          <div className="text-green-800 font-bold tracking-tighter text-2xl">Better</div>
          <div className="text-2xl capitalize text-zinc-300">mortgage</div>
        </div>
        <div>We can't wait to say “Welcome home.” Apply 100% online, with expert customer support.</div>
        <div className="flex items-center gap-1">
          <div className="text-green-800 font-bold tracking-tighter text-2xl">Better</div>
          <div className="text-2xl capitalize text-zinc-300">mortgage</div>
        </div>
        <div>We can't wait to say “Welcome home.” Apply 100% online, with expert customer support.</div>
      </div>

      <div className="flex w-[20%] mt-14 flex-col items-start gap-5">
        <div className="uppercase text-lg font-semibold">resources</div>
        <div>Home affordability calculator</div>
        <div>Home affordability calculator</div>
        <div>Home affordability calculator</div>
        <div>Home affordability calculator</div>
        <div>Home affordability calculator</div>
        <div>Home affordability calculator</div>
        <div>Home affordability calculator</div>
        <div>Home affordability calculator</div>
        <div>Home affordability calculator</div>
        <div>Home affordability calculator</div>
        <div>Home affordability calculator</div>
        <div>Home affordability calculator</div>
        <div>Home affordability calculator</div>
      </div>

      <div className="flex w-[15%] mt-14 flex-col items-start gap-5">
        <div className="uppercase text-lg font-semibold">company</div>
        <div>
          <Link
            to="/aboutus"
            className="relative inline-block pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-green-800 after:transition-all after:duration-300 hover:after:w-full"
          >
            About Us
          </Link>
        </div>
        <div>Careers</div>
        <div>Media</div>
        <div>Partner</div>
        <div>Learnings</div>
        <div>FAQs</div>
        <div>Investor Relations</div>
      </div>

      <div className="flex w-[10%] mt-14 flex-col items-start gap-5">
        <div className="uppercase text-lg font-semibold">Contact Us</div>
        <div>hello@better.com</div>
        <div>hello@better.com</div>
        <div>hello@better.com</div>
        <div>hello@better.com</div>
        <div>hello@better.com</div>
        <div>hello@better.com</div>
        <div>hello@better.com</div>
        <div>hello@better.com</div>
      </div>
      
    </div>
  );
}

export default Footer2;

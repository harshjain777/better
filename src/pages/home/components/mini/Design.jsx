import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function Design({ title, secTitle, img1, img2 }) {
  return (
    <div className="flex flex-col items-center py-3 gap-10">



      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        <div className="bg-green-200 w-[30rem] flex flex-col items-start gap-2 rounded-lg px-4 h-[23rem]  py-4 ">
          <div className="text-center font-bold tracking-wide text-2xl py-4 capitalize">
            {title}
          </div>
          <IoArrowForwardCircleOutline className="text-7xl py-4" />
          <div className="py-4">
            <img src={img1} alt="img1" className="rounded-lg w-[80%]" />
          </div>
        </div>

        <div className="bg-green-200  flex flex-col md:flex-row items-start md:items-center justify-center gap-0 md:gap-5 w-[30rem]  md:w-[63rem] rounded-lg px-4 h-[23rem]  py-3 ">
          <div className="flex flex-col items-start px-10 py-5 gap-0 md:gap-7">
            <div className="text-center font-bold tracking-wide text-2xl py-1 md:py-4 capitalize">
              {secTitle}
            </div>
            <div className="w-[70%] hidden md:block text-lg capitalize">
              Kick your home loan into hyperdrive. Going from locked rate to
              Commitment Letter takes weeks for traditional lenders. We do it in
              a single day. Traditional lenders deliver a Commitment Letter in a
              few weeks.
            </div>
            <IoArrowForwardCircleOutline className=" text-5xl md:text-7xl py-1 md:py-4" />
          </div>
          <img
            src={img2}
            alt="img2"
            className=" w-[50%] md:w-[30%] rounded-xl "
          />
        </div>
      </div>
    </div>
  );
}

export default Design;

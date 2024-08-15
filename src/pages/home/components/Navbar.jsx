import React, { useState, useEffect } from "react";
import { IoCall } from "react-icons/io5";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Dropdown items for each main navbar item
  const dropdownItems = {
    buy: [
      "Apply now",
      "Purchase rates",
      "Affordability calculator",
      "Mortgage calculator",
      "Rent vs buy calculator",
      "Find an agent",
      "VA loans",
      "Learning center",
    ],
    refinance: [
      "Apply now",
      "Refinance rates",
      "Affordability calculator",
      "Mortgage calculator",
      "Refinance calculator",
      "Find an agent",
      "Learning center",
    ],
    HELOC: [
      "Apply now",
      "HELOC rates",
      "Affordability calculator",
      "Mortgage calculator",
      "HELOC calculator",
      "Find an agent",
      "Learning center",
    ],
    rates: [
      "Current rates",
      "Historical rates",
      "Affordability calculator",
      "Mortgage calculator",
      "Rate comparison",
      "Learning center",
    ],
    better: [
      "Apply now",
      "Better+ rates",
      "Affordability calculator",
      "Mortgage calculator",
      "Better+ benefits",
      "Learning center",
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        scrolled ? "bg-white text-black " : "bg-[#1b4634] text-white"
      } px-6 py-5 flex items-center justify-between md:px-24 sticky top-0 z-50 transition-colors duration-300`}
    >
      <div className="flex items-center gap-5 text-lg md:gap-16 md:text-xl capitalize">
        <div className={`font-bold tracking-tighter text-2xl ${scrolled ? "text-black" : "text-white"}`}>
          Better
        </div>
        <div className="hidden md:flex items-center text-sm md:text-lg font-light gap-3 md:gap-16">
          {Object.keys(dropdownItems).map((item, index) => (
            <div
              key={index}
              className="relative hover:text-black hover:bg-white hover:rounded-full px-2 py-1 duration-100 ease-in cursor-pointer group"
            >
              {item}
              <div className="absolute top-full mt-2 bg-white text-black p-4 rounded-md shadow-lg w-64 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 invisible group-hover:block">
                <ul className="flex flex-col gap-2">
                  {dropdownItems[item].map((dropdownItem, idx) => (
                    <li
                      key={idx}
                      className="hover:text-green-600 flex items-center justify-between"
                    >
                      {dropdownItem}{" "}
                      {dropdownItem === "Learning center" && (
                        <span className="ml-2">→</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-8">
        <div
          className={`w-10 h-10 rounded-full border-[1px] font-thin flex items-center justify-center ${
            scrolled ? "border-black" : "border-white"
          }`}
        >
          <IoCall size={24} aria-label="call icon" />
        </div>
        <div className={`text-xl capitalize font-light ${scrolled ? "text-black" : "text-white"}`}>
          sign in
        </div>
      </div>
    </div>
  );
}

export default Navbar;

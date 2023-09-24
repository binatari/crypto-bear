import React from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";

const HomeNav = ({setter}) => {
  const [, scrollYPosition] = useScrollPosition();

  return (
    <nav
      className={`fixed w-full z-[100] top-0 left-0 pt-10 ${
        scrollYPosition > 50 ? "nav-bg" : ""
      }`}
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto px-4 my-[1.44rem] bg-mainGrey">
        <img src="/logo.png" className="h-10 mr-3" alt="Home Logo" />
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="flex flex-col text-white text-sm md:items-center p-4 md:p-0 mt-4 font-semibold border  md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>About Event</li>
            <li>Speakers</li>
            <li>Sponsors</li>
            <li>Contact</li>
          </ul>
        </div>

        <i
          onClick={() => {
            setter((oldVal) => !oldVal);
          }}
          className="las la-bars la-lg text-[#00D770] md:hidden"
        ></i>
        <button className="text-black hidden md:block button-bg w-full max-w-[164px] text-sm font-semibold pt-3 pb-4 bg-cover">
            Buy Tickets
        </button>
      </div>
    </nav>
  );
};

export default HomeNav;

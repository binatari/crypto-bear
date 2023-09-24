import React from "react";
import CountDown from "../CountDown";

const Hero = () => {
  return (
    <div className=" py-24  flex flex-col items-center mt-[103px]">
      <div className="header-bg text-white w-full mx-auto py-3 text-sm leading-[180%] max-w-[460px] flex md:py-1 mb-11 justify-center">
        <span className="text-center">November 30, 2023 | 5:30 PM | Dubai, ATLANTIS, THE PALM</span>
      </div>
      <img src="/cryptobear.png" className="mb-[60px!important]" />
      <CountDown />
      <button className="text-black button-bg w-full max-w-[227px] text-xl font-semibold mt-[60px!important] pt-4 pb-6 bg-cover">
        Book Your Tickets
      </button>
    </div>
  );
};

export default Hero;

import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <div className="w-full container max-w-[1072px] mx-auto px-10 py-7 md:flex items-center relative justify-between gap-6 mb-[160px]">
        <img src="/register-box.png" className="top-0 absolute left-0 h-full w-full -z-1 "/>
        <h3 className="text-3xl md:text-5xl  leading-[122%] text-[#00D770] w-full max-w-[1072px]">
          <span className="block text-white">Register</span>Now
        </h3>
        <button className="text-black z-50 button-bg w-full max-w-[227px] text-xl font-semibold pt-4 pb-6 bg-cover">
          Book Your Tickets
        </button>
      </div>
    </div>
  );
};

export default Footer;

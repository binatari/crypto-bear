import React from "react";
import { useGlitch } from "react-powerglitch";

const About = () => {
    const glitch = useGlitch()
  return (
    <div className="w-full container mx-auto flex-col md:flex-row flex justify-center gap-6">
      <img src="/venue-image.png" />
      <div className="max-w-[541px]">
        <h3 ref={glitch.ref} className=" text-3xl md:text-5xl mb-12 leading-[122%] text-[#00D770]">
          <span className="block text-white"> About </span> the Event
        </h3>
        <p className="text-white mb-3 leading-[180%]">
          <span className="font-bold">CryptoBEAR </span> is the blockchain
          conference network bringing together the key players of crypto
          industry and experts to redefine the future of finance. The edition of
          the <span className="font-bold">CryptoBEAR will</span> take place
          during on
          <span className="font-bold text-[#00D770]">
            {" "}
            NOVEMBER 30, 2023
          </span>{" "}
          in Dubai, with the world’s top crypto companies and blockchain
          entrepreneurs.
        </p>
        <p className="text-white leading-[180%]">
          Today, UAE, specifically Dubai is gearing up to become a global crypto
          hub. Thus, CryptoBEAR will be the gathering in the region on behalf of
          the world of blockchain and cryptocurrency, with a wide range of
          topics focused on the financial technologies of the future, extensive
          networking opportunities and participation from more than 40
          countries.
        </p>
        <div className="grid grid-cols-2 gap-y-7 mt-3">
          <p className="text-white mb-3 leading-[180%] font-bold">
            <span className="font-normal block">DATE</span>
            November 30, 2023
          </p>
          <p className="text-white mb-3 leading-[180%] font-bold">
            <span className="font-normal block">TIME</span>
            5:30PM
          </p>
          <p className="text-white mb-3 leading-[180%] font-bold">
            <span className="font-normal block">VENUE</span>
            Dubai, ATLANTIS, THE PALM
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import { sponsors } from "../../data";
import { useGlitch } from "react-powerglitch";

const Sponsors = () => {
  const glitch = useGlitch();
  return (
    <div id="sponsors" className="w-full container mx-auto flex flex-col items-center justify-center gap-6 pb-[160px]">
      <div className="w-full max-w-[1072px]">
        <div>
          <h3 ref={glitch.ref} className="text-3xl md:text-5xl mb-12 leading-[122%] text-[#00D770] w-full max-w-[1072px]">
            <span className="block text-white">Partners &</span>Sponsors
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {sponsors.map((sponsor) => (
          <img src={sponsor} />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;

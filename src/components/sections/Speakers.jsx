import React from "react";
import { speakers } from "../../data";

const Speakers = () => {
  return (
    <div className="w-full container mx-auto flex flex-col items-center justify-center gap-6 pb-[160px]">
      <h3 className="text-3xl md:text-5xl mb-12 leading-[122%] text-[#00D770] w-full max-w-[1072px]">
        <span className="block text-white">The</span>Speakers
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {speakers.map((speaker) => (
          <img src={speaker} />
        ))}
      </div>
    </div>
  );
};

export default Speakers;

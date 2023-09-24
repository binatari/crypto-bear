import React from "react";
import { topics } from "../../data";
import { useGlitch } from "react-powerglitch";

const Topics = () => {
  const glitch = useGlitch();
  return (
    <div className="w-full container mx-auto flex flex-col items-center justify-center gap-6 pb-[160px]">
      <div className="w-full max-w-[1072px]" >
        <div>
          <h3 ref={glitch.ref} className="text-3xl md:text-5xl mb-12 leading-[122%] text-[#00D770] w-full max-w-[1072px]">
            <span className="block text-white"> Discussion</span>Topics
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
        {topics.map((topic, index) => (
          <div className="flex gap-5">
            <h4 className="text-white text-[25px] leading-[122%]">
              {index + 1}
            </h4>
            <p className="text-white leading-[180%]">
              {topic.topic}

              <span className="text-white leading-[180%] block opacity-40">
                {topic.name}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topics;

import React from "react";
import Countdown from "react-countdown";

const renderer = ({ hours, minutes, seconds, completed, days }) => {
  if (!completed) {
    // Render a completed state
    return (
      <div className=" text-[24px] md:text-[31.18px] gap-1  flex-wrap flex text-center nippo w-full text-bold justify-center text-white">
        <div className="flex flex-col  justify-center bg-timer min-w-[94px] overflow-visible">
          <img
            src="/timer-bg.png"
            className="absolute left-0 min-w-[100%] min-h-[94px] -top-5"
          />
          <span className="md:text-[20.51px] text-white press-start-font">
            {days}
          </span>
          <span className="font-semibold px-4 mt-[14px] block text-sm text-[31px]">
            Days
          </span>
        </div>
        <div className="flex   flex-col justify-center bg-timer  min-w-[94px]">
          <img
            src="/timer-bg.png"
            className="absolute left-0 min-w-[100%] min-h-[94px] -top-5"
          />
          <span className="md:text-[20.51px]  text-white  press-start-font">
            {hours}
          </span>
          <span className="text-sm mt-[14px] font-semibold px-4 block text-[31px]">Hours</span>
        </div>

        <div className="flex   flex-col justify-center bg-timer  min-w-[94px]">
          <img
            src="/timer-bg.png"
            className="absolute -top-5 left-0 min-w-[100%] min-h-[94px]"
          />
          <span className="md:text-[20.51px] text-white  press-start-font">
            {minutes}
          </span>
          <span className=" px-4 font-semibold mt-[14px] text-sm block text-[31px]">
            Minutes
          </span>
        </div>

        <div className="flex flex-col justify-center bg-timer  min-w-[94px]">
          <img
            src="/timer-bg.png"
            className="absolute -top-5 left-0 min-w-[100%] min-h-[94px]"
          />
          <span className="md:text-[20.51px] text-white  press-start-font">
            {seconds}
          </span>
          <span className=" px-4 font-semibold text-sm mt-[14px]  block text-[31px]">
            Seconds
          </span>
        </div>
      </div>
    );
  }
};

const CountDown = () => {
  const date = new Date("2023-11-30");
  return (
    <Countdown
      zeroPadTime={2}
      daysInHours
      date={date}
      renderer={renderer}
      autoStart={true}
    />
  );
};

export default CountDown;

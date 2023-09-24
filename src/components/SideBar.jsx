import React, { useState, useEffect } from "react";

export default function HomeSidebar({ show, setter }) {

  // Define our base class
  const className =
    " bg-[#05050A] min-h-screen text-white w-[250px] transition-[margin-left] ease-in-out duration-500 fixed top-0 bottom-0 left-0 z-[4000]";
  // Append class based on state of sidebar visiblity
  const appendClass = show ? " ml-0" : " ml-[-250px]";

  // Clickable menu items
  const MenuItem = ({ icon, name, route }) => {
    // Highlight menu item based on currently displayed route
    const colorClass = "text-white hover:bg-[#00D770] "
    return (
      <a
        href={route}
        onClick={() => {
          setter((oldVal) => !oldVal);
        }}
        className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3  ${colorClass}`}
      >
        {/* <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                    {icon}
                </div> */}
        <div>{name}</div>
      </a>
    );
  };

  // Overlay to prevent clicks in background, also serves as our close button
  const ModalOverlay = () => (
    <div
      className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-[2000]`}
      onClick={() => {
        setter((oldVal) => !oldVal);
      }}
    />
  );

  return (
    <>
      <div className={`${className}${appendClass} md:hidden`}>
        <div className="pb-[42px] pt-[30px] flex justify-center">
          <a href="/">
            {/*eslint-disable-next-line*/}
            <img src="/logo.png" className="h-10 mr-3" alt="Home Logo" />
          </a>
        </div>
        <div className="flex flex-col">
          <MenuItem name="About Event" route="/" />
          <MenuItem name="Speakers" route="/#" />
          <MenuItem name="Sponsors" route="/#" />
          <MenuItem name="Contact" route="/#" />
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  );
}

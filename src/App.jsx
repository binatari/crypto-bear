import { useState } from "react";
import HomeMobileNav from "./components/homeMobileNav";
import HomeNav from "./components/Nav";
import HomeSidebar from "./components/SideBar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Topics from "./components/sections/Topics";
import Speakers from "./components/sections/Speakers";
import Sponsors from "./components/sections/Sponsors";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className=" min-h-screen px-2 md:px-0">
      <div className="absolute top-0 left-0 w-full flex justify-center">
        <div className="ellipse-top "></div>
      </div>
      <HomeNav setter={setShow} />
      <HomeSidebar show={show} setter={setShow} />
      <Hero />
      <About />
      <div className="overflow-x-hidden py-[160px]">
        <img src="/identifying-logo.png" className="w-screen" />
      </div>
      <Topics/>
      <Speakers/>
      <div className="overflow-x-hidden py-[160px]">
        <img src="/date.png" className="w-screen" />
      </div>
      <Sponsors/>
    </div>
  );
}

export default App;

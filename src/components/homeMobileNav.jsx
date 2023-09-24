
import { useState } from "react";

export default function HomeMobileNav({ setter, bg }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`md:hidden z-20 fixed top-0 left-0 right-0 h-[60px] py-10  flex  px-6 justify-between ${
        bg ? "bg-main" : null
      }`}
    >
      <a href="/" className="flex items-center">
        {/*eslint-disable-next-line*/}
        <img src="/logo.png" className="h-10 mr-3" alt="Home Logo" />
      </a>

      {/*eslint-disable-next-line*/}
      <div className="flex items-center gap-2 md:gap-4">
        <i
          onClick={() => {
            setter((oldVal) => !oldVal);
          }}
          className="las la-bars la-lg text-primary"
        ></i>
      </div>
    </nav>
  );
}

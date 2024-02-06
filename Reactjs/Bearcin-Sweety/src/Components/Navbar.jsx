import { useState } from "react";
import "../index.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleHamburgerMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="flex flex-col gap-4 md:gap-0 md:flex md:flex-row items-center justify-between px-6 py-5 md:px-8 md:py-3 bg-[#233d4d] relative">
        <div className="flex  items-center justify-between w-full">
          <h1 className="text-3xl  md:text-4xl text-white font-cursive text-nowrap">
            Bearcin's Portfolio
          </h1>

          {/* hamburger menu */}
          <div
            className="cursor-pointer md:hidden w-full flex justify-end"
            id="hamburger"
            onClick={handleHamburgerMenu}
          >
            <img
              src="https://avatars.githubusercontent.com/u/108384050?v=4g"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
        {/* menu items */}
        <div className="hidden md:flex items-center gap-7 pe-3 items center">
          {/*search bar*/}
          <div className="relative bg-white hover:bg-gray-200 px-5 rounded-md cursor-pointer py-2">
            <a href="https://bearcin-sweety-projects.netlify.app/">
              <p className="text-[#233d4d] font-bold">Projects</p>
            </a>
          </div>
          {/* mail */}
          <div>
            <a href="mailto:imsweety33@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                className="text-white hover:text-gray-200"
              >
                <path
                  fill="currentColor"
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
                ></path>
              </svg>
            </a>
          </div>

          {/* call */}
          <div>
            <a href="tel:+60-1660504998">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                className="text-white hover:text-gray-200"
              >
                <path
                  fill="currentColor"
                  d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"
                ></path>
              </svg>
            </a>
          </div>

          <img
            src="https://avatars.githubusercontent.com/u/108384050?v=4g"
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </>
  );
}
export default Navbar;

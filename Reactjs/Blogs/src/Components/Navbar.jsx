import { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleHamburgerMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="flex flex-col gap-4 md:gap-0 md:flex md:flex-row items-center justify-between px-6 py-5 md:px-8 md:py-3 bg-[#344e41] relative">
        <div className="flex  items-center justify-between w-full">
          {" "}
          <h1 className="text-3xl font-serif md:text-3xl text-white font-cursive text-nowrap">
            <Link to={"/"}> Post's of Bearcin </Link>
          </h1>
          {/* hamburger menu */}
          <div
            className="cursor-pointer md:hidden w-full flex justify-end"
            id="hamburger"
            onClick={handleHamburgerMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.25em"
              height="2.25em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
              ></path>
            </svg>
          </div>
        </div>
        {/* menu items */}
        <div className="hidden md:flex items-center gap-7 pe-3 items center">
          {/*search bar*/}
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
              className="absolute top-2 left-1"
            >
              <path
                fill="#3b82f6"
                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Search Blogs"
              className="px-8 py-2 rounded placeholder-[#3b82f6] "
            />
          </div>
          {/* write */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
              className="cursor-pointer text-white hover:text-gray-100"
            >
              <path
                fill="currentColor"
                d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-6v-4.25l9.175-9.175q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662L13.25 15zM21.025 4.4l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"
              ></path>
            </svg>
          </div>

          {/* bell */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
              className="relative cursor-pointer text-white hover:text-gray-100"
            >
              <path
                fill="currentColor"
                d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
              ></path>
            </svg>
            <small className="bg-red-600 cursor-pointer absolute top-2 ml-4 text-white rounded-full px-1 ">
              17
            </small>
          </div>

          <img
            src="https://avatars.githubusercontent.com/u/108384050?v=4g"
            alt="avatar"
            className="w-8 h-8 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}
export default Navbar;

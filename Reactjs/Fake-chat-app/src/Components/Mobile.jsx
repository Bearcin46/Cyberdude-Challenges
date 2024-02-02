import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Mobile = () => {
  return (
    <div className="mx-auto max-w-xl bg-main bg-cover shadow-xl shadow-gray-700 rounded h-screen">
      <Navbar />
      <div className="flex items-center justify-center mt-2">
        <span className="bg-gray-300 text-gray-600 font-semibold text-sm px-2 rounded-md  py-1">
          February 1, 2024
        </span>
      </div>
      <div className="flex items-center justify-center mt-2">
        <div className="bg-yellow-100 text-gray-600 w-[60%] font-semibold text-sm px-2 rounded-md  py-1">
          <div className="flex gap-2 items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
              className="text-gray-600 top-0"
            >
              <path
                fill="currentColor"
                d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1c1.71 0 3.1 1.39 3.1 3.1v2z"
              ></path>
            </svg>
            <small className="text-xs">
              Messages and calls are end-toend encryted. No one outside of this
              chat, not even WhatsApp, can read or listen to them.Tap to learn
              more
            </small>
          </div>
        </div>
      </div>
      <Footer className="absolute" />
    </div>
  );
};

export default Mobile;

import React, { useState } from "react";
import Message from "./Message";

const Footer = () => {
  const [message, setMessage] = useState("");
  const [finalmsg, setFinalmsg] = useState([]);
  const handleChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { message };
    if (message && message !== "") {
      setFinalmsg((prev) => [...(prev || []), data]);
      setMessage("");
    }
  };

  var outgoingmsg = finalmsg.map((msg, index) => {
    return (
      <div
        key={index}
        className="bg-yellow-200  px-3 py-2 flex flex-col  rounded-tl-xl rounded-bl-xl rounded-br-xl mb-3"
      >
        <span className="">{msg.message}</span>
        <div className="flex justify-between items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="text-gray-500"
          >
            <path
              fill="currentColor"
              d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z"
            ></path>
          </svg>
          <small className="text-end text-[10px] text-gray-500">1.15 AM</small>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="flex justify-end mt-2 px-3 mb-3">
        <div className="flex flex-col  ">{outgoingmsg}</div>
      </div>
      {/* footer */}
      <div className=" absolute max-w-xl mx-auto bottom-3 left-0 right-0">
        <div className="flex gap-3 px-2 ">
          <div className="bg-white flex-1 mr-1 w-full flex items-center justify-between rounded-full px-4 py-2 gap-3">
            <div className="flex items-center gap-2">
              {/* emoji */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.75em"
                height="1.75em"
                viewBox="0 0 24 24"
                className="text-gray-400"
              >
                <circle cx="15.5" cy="9.5" r="1.5" fill="currentColor"></circle>
                <circle cx="8.5" cy="9.5" r="1.5" fill="currentColor"></circle>
                <path
                  fill="currentColor"
                  d="M12 18c2.28 0 4.22-1.66 5-4H7c.78 2.34 2.72 4 5 4z"
                ></path>
                <path
                  fill="currentColor"
                  d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"
                ></path>
              </svg>
              {/* input */}
              <form action="" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Message"
                  value={message}
                  onChange={handleChange}
                  className=" bg-white text-emerald-800 w-full placeholder-gray-400  text-lg outline-none"
                />
              </form>
            </div>
            <div className="flex gap-4">
              {/* attachment */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.75em"
                height="1.75em"
                viewBox="0 0 24 24"
                className="text-gray-400"
              >
                <g fill="none" fillRule="evenodd">
                  <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                  <path
                    fill="currentColor"
                    d="M18.71 17.565a4.25 4.25 0 0 0 0-6.01l-6.54-6.54A1 1 0 0 1 13.584 3.6l6.54 6.54a6.25 6.25 0 1 1-8.838 8.84l-7.954-7.955A4.501 4.501 0 0 1 9.698 4.66l7.953 7.953a2.752 2.752 0 0 1-3.892 3.891L6.513 9.257a1 1 0 0 1 1.414-1.415l7.247 7.247a.751.751 0 0 0 1.063-1.062L8.284 6.074A2.501 2.501 0 0 0 4.746 9.61l7.954 7.954a4.25 4.25 0 0 0 6.01 0Z"
                  ></path>
                </g>
              </svg>

              {/* camera */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.75em"
                height="1.75em"
                viewBox="0 0 24 24"
                className="text-gray-400"
              >
                <circle cx="12" cy="12" r="3.2" fill="currentColor"></circle>
                <path
                  fill="currentColor"
                  d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="bg-emerald-800  w-14 h-14 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.75em"
              height="1.75em"
              viewBox="0 0 24 24"
              className="text-white"
            >
              <path
                fill="currentColor"
                d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

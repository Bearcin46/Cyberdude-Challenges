import React from "react";

const Navbar = () => {
  return (
    <div className="mx-auto max-w-xl bg-emerald-800 h-[80px] pe-2 py-4 flex items-center justify-between relative">
      <div className="flex gap-2 items-center ">
        {/* arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
          className="cursor-pointer text-white hover:text-gray-200"
        >
          <path
            fill="currentColor"
            d="m7.85 13l2.85 2.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L4.7 12.7q-.3-.3-.3-.7t.3-.7l4.575-4.575q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7L7.85 11H19q.425 0 .713.288T20 12q0 .425-.288.713T19 13z"
          ></path>
        </svg>

        <img
          src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2022-07/gazali-marimbo-szshvnxh7lq-unsplash.jpg?itok=2Lb4VwIj"
          alt=""
          className="w-9 h-9 rounded-full cursor-pointer"
        />
        <p className="text-white text-lg cursor-pointer">My Love❤️</p>
      </div>
      <div className="flex gap-4 items-center">
        {/* video */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.85em"
          height="1.85em"
          viewBox="0 0 24 24"
          className="cursor-pointer text-white hover:text-gray-200"
        >
          <path
            fill="currentColor"
            d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"
          ></path>
        </svg>
        {/* call */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.85em"
          height="1.85em"
          viewBox="0 0 24 24"
          className="cursor-pointer  text-white hover:text-gray-200"
        >
          <path
            fill="currentColor"
            d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"
          ></path>
        </svg>

        {/* menu */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.85em"
          height="1.85em"
          viewBox="0 0 24 24"
          className="cursor-pointer  text-white hover:text-gray-200"
        >
          <path
            fill="currentColor"
            d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;

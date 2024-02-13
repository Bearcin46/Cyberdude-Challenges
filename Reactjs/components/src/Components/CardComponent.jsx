import React from "react";

const CardComponent = () => {
  return (
    <div className="flex  gap-10">
      {/* card 1*/}
      <div>
        <div className="w-[286px] h-[180px] bg-gray-500 text-white flex items-center justify-center rounded-tr-lg rounded-tl-lg">
          <p>286x180</p>
        </div>
        <div className="flex flex-col items-start px-5 py-3 gap-4 w-[286px]  rounded-br-lg rounded-bl-lg border-2 border-gray-400">
          <h2 className="font-bold">Card title</h2>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className="px-3 py-1 focus:outline-none text-white bg-blue-600 rounded">
            Go somewhere
          </button>
        </div>
      </div>

      {/* card2 */}
      <div>
        <div className="w-[286px] h-[180px] bg-gray-500 text-white flex items-center justify-center rounded-tr-lg rounded-tl-lg">
          <p>Image Cap</p>
        </div>
        <div className="flex flex-col items-start px-5 py-3 gap-4 w-[286px]  rounded-br-lg rounded-bl-lg border-2 border-gray-400">
          <h2 className="font-bold">Card title</h2>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;

import jsondata from "../data/data.json";
import profile from "./images/profile.png";

function Main() {
  const blogPostByTemplate = jsondata.map((post) => {
    return (
      <div className="flex md:flex-row flex-col justify-between" key={post.id}>
        <div className="mt-10 flex flex-col gap-3 justify-center">
          <h1 className="text-white text-4xl ml-4 md:text5xl font-bold">
            {post.name},
          </h1>
          <h3 className="text-white text-4xl ml-4 md:text-6xl font-bold">
            {post.title}.
          </h3>
          <p className="text-white text-lg ml-4 md:text-xl font-bold">
            {post.description}
          </p>
          <div className="ml-4 flex gap-4 mt-4">
            <a href="tel:+60-166050498">
              <button className="px-5 py-3 rounded bg-[#233d4d] text-white font-bold">
                Contact
              </button>
            </a>
            <a href="https://resume.io/r/FnWM79XIF" target="_blank">
              <button className="px-5 py-3 rounded hover:bg-gray-300 text-[#233d4d] bg-white font-bold">
                Download CV
              </button>
            </a>
          </div>
          {/* icons */}
          <div className=" ml-3 mt-4 flex  gap-3">
            {/* instagram */}
            <div className="bg-[#233d4d] flex items-center cursor-pointer justify-center text-white w-10 h-10 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                className="hover:text-orange-400"
              >
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                ></path>
              </svg>
            </div>

            {/* github */}
            <div className="bg-[#233d4d] cursor-pointer  flex items-center justify-center text-white w-10 h-10 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                className="hover:text-green-400"
              >
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                ></path>
              </svg>
            </div>

            {/* linkedin */}
            <div className="bg-[#233d4d] flex items-center cursor-pointer  justify-center text-white w-10 h-10 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                className="hover:text-[#3b82f6]"
              >
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="px-10 flex items-center justify-center">
          <div className="md:h-[500px] h-[300px] w-[350px] md:w-[550px] mt-28 bg-[#233d4d] rounded-custom relative">
            <img
              src={profile}
              alt=""
              className="absolute bottom-2 md:h-[600px] h-[400px] rounded-full"
            />
          </div>
        </div>
      </div>
    );
  });
  return <>{blogPostByTemplate}</>;
}
export default Main;

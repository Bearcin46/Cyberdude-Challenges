import React, { useEffect, useState } from "react";
import Blogpost from "./Blogpost";
import { Link } from "react-router-dom";
import Posting from "./Posting";

function Post() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        let response = await fetch("https://dummyjson.com/posts");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();
        setPost(data.posts);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDataAndSetState();
  }, []);

  const blogPostbyTemplate = posts.map((post) => {
    return (
      <Link to={`/Posting/${post.id}`}>
        <div className="md:px-28" key={post.id}>
          <div className="border-2 px-4 py-3 border-gray-400 w-[90%] shadow-md mb-3 shadow-gray-400">
            <div className="flex w-full  justify-between">
              <div className="flex gap-4">
                <div>
                  <img
                    src="https://static-cse.canva.com/blob/1145215/1.magebyRodionKutsaevviaUnsplash.jpg"
                    alt=""
                    className="w-[70px] h-[70px] rounded"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h1 className="font-bold text-[#354f42ff]">{post.title}</h1>
                  <div className="flex gap-2 items-center">
                    <p>Published</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="5px"
                      height="5px"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2z"
                      ></path>
                    </svg>
                    <p>March 3, 2023</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <h3 className="font-semibold text-[#354f42ff]">
                    BEARCIN SWEETY
                  </h3>
                  <img
                    src="https://avatars.githubusercontent.com/u/108384050?v=4g"
                    alt=""
                    className="w-6 h-6 rounded-full"
                  />
                </div>
                <div className="flex gap-5 items-center">
                  {/* share */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65c0 1.61 1.31 2.92 2.92 2.92c1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
                    ></path>
                  </svg>
                  {/* coment */}
                  <div className="flex gap-1 items-center">
                    <p>{post.reactions}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.891 1 4.127L3 21l4.873-1c1.236.64 2.64 1 4.127 1"
                      ></path>
                    </svg>
                  </div>

                  {/* views */}
                  <div className="flex gap-1 items-center">
                    <p>143</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M3 21h3v-3H3m5 3h3v-7H8m5 7h3V9h-3m5 12h3V3h-3z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <>
      <div>
        <h1 className="text-red-800 font-bold mt-10 mb-5 ml-3 text-3xl">
          Latest Blogs
        </h1>
        <div className="flex flex-col gap-10 justify-center">
          <Link to={"/Posting"}>{blogPostbyTemplate}</Link>
        </div>
      </div>
    </>
  );
}

export default Post;

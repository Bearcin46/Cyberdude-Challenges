import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Posting(props) {
  const params = useParams();

  const [posts, setPost] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await fetch(
        `https://dummyjson.com/posts/${params.id}`
      );
      const JsonObj = await fetchedPosts.json();
      setPost(JsonObj);
    };

    fetchPosts();
  }, [params.id]);

  console.log(posts);
  return (
    <div
      className="bg-main h-screen flex justify-center items-center"
      key={posts.id}
    >
      <div className="bg-white rounded-md h-[250px] flex-col w-full max-w-xl mx-auto px-4 py-3 flex justify-center">
        <h1 className="text-[#344e41 mb-3 font-bold">{posts.title}</h1>
        <h2>{posts.body}</h2>
        <Link to={"/"}>
          <button className="text-white mt-4 bg-[#344e41] rounded px-5 py-2">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Posting;

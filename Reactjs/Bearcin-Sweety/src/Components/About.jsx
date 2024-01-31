import jsonData from "../data/data.json";
import codepic from "./images/code.jpg";
function About() {
  const blogPostByTemplate = jsonData.map((post) => {
    return (
      <div
        key={post.id}
        className="bg-[#233d4d] h-[400px] w-[450px] md:w-[500px] flex flex-col justify-center items-center px-10 py-7"
      >
        <ul className="list-none *:text-white ">
          <li className="text-xl mb-2">
            <span className="font-bold">Name :</span>{" "}
            <span className="text-lg hover:text-gray-400">{post.name}</span>
          </li>
          <li className="text-xl mb-2">
            <span className="font-bold">Contact :</span>{" "}
            <span className="text-lg hover:text-gray-400">
              {post.contactNo}
            </span>
          </li>
          <li className="text-xl mb-2">
            <span className="font-bold">Address : </span>
            <span className="text-lg hover:text-gray-400">{post.livesIn}</span>
          </li>
          <li className="text-xl mb-2">
            <span className="font-bold">Experience : </span>{" "}
            <span className="text-lg hover:text-gray-400">
              {post.description}
            </span>
          </li>
          <li className="text-xl mb-2">
            <span className="font-bold"> Current Company :</span>{" "}
            <span className="text-lg hover:text-gray-400">{post.company}</span>
          </li>
          <li className="text-xl mb-2">
            <span className="font-bold"> Job Title : </span>
            <span className="text-lg hover:text-gray-400">{post.jobTitle}</span>
          </li>
        </ul>
        <div className="mt-5">
          <a href="https://bearcin-sweety-projects.netlify.app/">
            <button className="bg-white rounded px-5 py-2 hover:bg-gray-300 font-bold text-[#233d4d] ">
              View Works
            </button>
          </a>
        </div>
      </div>
    );
  });
  return (
    <div className="bg-[#4c616eff] py-10">
      <h2 className="text-white text-6xl mb-6 text-center font-bold">ABOUT</h2>
      <div className="flex md:flex-row flex-col items-center justify-center mt-10 ">
        {blogPostByTemplate}
        <div>
          <img src={codepic} alt="" className="w-[450px] h-[400px]" />
        </div>
      </div>
    </div>
  );
}
export default About;

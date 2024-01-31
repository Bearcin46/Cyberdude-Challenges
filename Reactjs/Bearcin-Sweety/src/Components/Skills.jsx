import jsondatas from "../data/data.json";
import skillspic from "./images/skills.jpg";
import ProgressBar from "@ramonak/react-progress-bar";
function Skills() {
  const blogPostByTemplate = jsondatas.map((post) => {
    return (
      <div key={post.id}>
        <div key={post.skills.id}>
          {post.skills.map((skill) => {
            return (
              <div
                key={skill.id}
                className="flex flex-col gap-2 cursor-pointer"
              >
                <p className="font-bold mt-1">{skill.name}</p>
                <ProgressBar
                  completed={skill.percentage}
                  className="w-[500px]"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  });
  return (
    <div className="bg-[#233d4d] py-8 mt-6">
      <div className="">
        <h1 className="text-3xl md:text-6xl font-bold text-center text-white">
          SKILLS
        </h1>
      </div>
      <div className="flex md:flex-row flex-col gap-5 justify-evenly mt-7 py-3">
        <div className="flex items-center justify-center">
          <img
            src={skillspic}
            alt=""
            className="h-[400px] w-[400px] rounded-md"
          />
        </div>
        <div className="flex flex-col gap-4 bg-white px-5 py-8 rounded-md">
          {blogPostByTemplate}
        </div>
      </div>
    </div>
  );
}
export default Skills;

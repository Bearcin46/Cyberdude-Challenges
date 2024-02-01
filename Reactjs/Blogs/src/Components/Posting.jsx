import Image from "./images/blog.jpg";
import { Link, useLocation } from "react-router-dom";
function Posting(props) {
  // const location = useLocation();
  // const data = location.state.propdril;
  // console.log(data);
  return (
    <div className="bg-main h-screen flex justify-center items-center">
      <div className="bg-white h-[200px] flex-col w-full max-w-xl mx-auto px-4 py-3 flex justify-center">
        <h2>
          His mother had always taught him not to ever think of himself as
          better than others. He'd tried to live by this motto. He never looked
          down on those who were less fortunate or who had less money than him.
          But the stupidity of the group of people he was talking to made him
          change his mind
        </h2>
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

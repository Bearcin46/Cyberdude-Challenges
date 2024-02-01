import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import Title from "./Components/Title";

function App() {
  return (
    <>
      <Navbar />
      {/* <Title />
      <Post /> */}
      <Outlet />
    </>
  );
}

export default App;

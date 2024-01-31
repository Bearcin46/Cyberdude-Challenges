import About from "./Components/About";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}

export default App;

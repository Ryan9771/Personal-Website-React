import LineBreakLight from "./components/util/LineBreakLight";
import LineBreakDark from "./components/util/LineBreakDark";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import HomeAbout from "./components/homeAbout/HomeAbout";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <LineBreakLight />
      <HomeAbout />
      <LineBreakLight />
      <About />
      <LineBreakDark />
      <Projects />
    </>
  );
}

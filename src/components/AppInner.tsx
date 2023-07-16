import LineBreakDark from "./util/LineBreakDark";
import LineBreakLight from "./util/LineBreakLight";
import Home from "./home/Home";
import HomeAbout from "./homeAbout/HomeAbout";
import About from "./about/About";
import Projects from "./projects/Projects";

function AppInner() {
  return (
    <>
      <Home />
      <LineBreakLight />
      <HomeAbout />
      <LineBreakLight />
      <About />
      <LineBreakDark />
      <Projects maxView={6} />
    </>
  );
}

export default AppInner;

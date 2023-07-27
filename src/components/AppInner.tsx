import LineBreakDark from "./util/LineBreakDark";
import LineBreakLight from "./util/LineBreakLight";
import Home from "./home/Home";
import HomeAbout from "./homeAbout/HomeAbout";
import About from "./about/About";
import Projects from "./projects/Projects";
import ViewAllProjectsBtn from "./projects/util/ViewAllProjectsBtn";

export interface AboutProps {
  firstPage: boolean;
  setFirstPage: (firstPage: boolean) => void;
}

function AppInner({ firstPage, setFirstPage }: AboutProps) {
  return (
    <>
      <Home />
      <LineBreakLight />
      <HomeAbout />
      <LineBreakLight />
      <About firstPage={firstPage} setFirstPage={setFirstPage} />
      <LineBreakDark />
      <Projects maxView={6} />
      <ViewAllProjectsBtn />
    </>
  );
}

export default AppInner;

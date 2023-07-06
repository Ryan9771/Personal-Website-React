import getStyles from "./Style";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import HomeAbout from "./components/homeAbout/HomeAbout";
import LineBreakLight from "./components/util/LineBreakLight";
import About from "./components/About/About";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <LineBreakLight />
      <HomeAbout />
      <LineBreakLight />
      <About />
    </>
  );
}

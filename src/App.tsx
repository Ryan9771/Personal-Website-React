import getStyles from "./Style";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import HomeAbout from "./components/homeAbout/HomeAbout";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <hr className={getStyles(styles, "hr")} />
      <HomeAbout />
    </>
  );
}

const styles = {
  hr: ["m-14", "h-px", "bg-gray-200", "md:hidden"],
};

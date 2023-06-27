import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import getStyles from "./Style";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <hr className={getStyles(styles, "hr")} />
    </>
  );
}

const styles = {
  hr: ["m-14", "h-px", "bg-gray-200", "md:hidden"],
};

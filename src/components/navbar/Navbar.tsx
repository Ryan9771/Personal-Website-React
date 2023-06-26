import getStyles from "../../Style";
import NavbarItem from "./NavbarItem";
import HomeLogo from "./HomeLogo";

function Navbar() {
  return (
    <nav className={getStyles(styles, "ctn")}>
      <HomeLogo />
      <ul className={getStyles(styles, "list")}>
        <NavbarItem id="about-nav" href="#about" title="About" />
        <NavbarItem id="" href="#projects" title="Projects" />
        <NavbarItem id="" href="https://github.com/Ryan9771" title="Github" />
        <NavbarItem id="contact-nav" href="#contact" title="Contact" />
      </ul>
    </nav>
  );
}

const styles = {
  ctn: [
    "bg-primary",
    "z-50",
    "w-full",
    "fixed",
    "top-0",
    "left-0",
    "px-6",
    "pb-3",
    "pt-4",
    "flex",
    "justify-between",
    "items-center",
  ],
  list: ["flex", "justify-between", "items-center", "list-none"],
};

export default Navbar;

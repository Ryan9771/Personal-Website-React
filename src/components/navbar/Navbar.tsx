import getStyles from "../../Style";
import NavbarItem from "./NavbarItem";
import HomeLogo from "./HomeLogo";

function Navbar() {
  return (
    <nav className={getStyles(styles, "ctn")}>
      <HomeLogo />
      <ul className={getStyles(styles, "list")}>
        <NavbarItem title="About" />
        <NavbarItem title="Projects" />
        <NavbarItem title="Github" />
        <NavbarItem title="Contact" />
      </ul>
    </nav>
  );
}

/* STYLES */
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

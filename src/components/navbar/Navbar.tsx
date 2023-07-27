import getStyles from "../../Style";
import NavbarItem from "./NavbarItem";
import HomeLogo from "./HomeLogo";

function Navbar({
  setFirstPage,
}: {
  setFirstPage: (firstPage: boolean) => void;
}) {
  return (
    <nav className={getStyles(styles, "ctn")}>
      <HomeLogo />
      <ul className={getStyles(styles, "list")}>
        <NavbarItem setFirstPage={setFirstPage} title="About" />
        <NavbarItem setFirstPage={setFirstPage} title="Projects" />
        <NavbarItem setFirstPage={setFirstPage} title="Github" />
        <NavbarItem setFirstPage={setFirstPage} title="Contact" />
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

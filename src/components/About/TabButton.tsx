import getStyles from "../../Style";

interface Props {
  firstPage: boolean;
  setFirstPage: (firstPage: boolean) => void;
}

function TabButton({ firstPage, setFirstPage }: Props) {
  return (
    <div className={getStyles(styles, "ctn")}>
      <div
        onClick={() => setFirstPage(true)}
        className={
          firstPage
            ? getStyles(styles, "leftBtn") + " bg-gray-400"
            : getStyles(styles, "leftBtn") + " bg-gray-300"
        }
      >
        About Me
      </div>
      <div
        onClick={() => setFirstPage(false)}
        className={
          firstPage
            ? getStyles(styles, "rightBtn") + " bg-gray-300"
            : getStyles(styles, "rightBtn") + " bg-gray-400"
        }
      >
        Contact Me
      </div>
    </div>
  );
}

const styles = {
  ctn: ["inline-flex", "mt-16", "md:mt-24", "lg:hidden"],
  leftBtn: [
    "hover:bg-gray-500",
    "text-gray-800",
    "w-32",
    "font-bold",
    "py-2",
    "px-4",
    "rounded-l",
    "text-center",
  ],
  rightBtn: [
    "hover:bg-gray-500",
    "text-gray-800",
    "w-32",
    "font-bold",
    "py-2",
    "px-4",
    "rounded-r",
    "text-center",
  ],
};

export default TabButton;

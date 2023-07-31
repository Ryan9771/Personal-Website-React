import getStyles from "../../../Style";
import { HashLink } from "react-router-hash-link";

function ViewAll() {
  return (
    <section className={getStyles(styles, "ctn")}>
      <HashLink to="/projects#" className={getStyles(styles, "link")}>
        <span className={getStyles(styles, "text")}>View More</span>
        <svg
          className={getStyles(styles, "icon")}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      </HashLink>
    </section>
  );
}

const styles = {
  ctn: [
    "w-full",
    "mt-4",
    "md:mt-8",
    "py-4",
    "flex",
    "items-center",
    "justify-center",
  ],
  link: ["flex", "items-center", "justify-center", "hover:scale-110", "trans"],
  text: ["text-gray-500", "mr-2"],
  icon: ["w-4", "h-4", "fill-gray-400"],
};

export default ViewAll;

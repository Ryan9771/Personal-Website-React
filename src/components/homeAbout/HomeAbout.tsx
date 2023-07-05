import getStyles from "../../Style";
import FirstHomeAboutGroup from "./FirstHomeAboutGroup";
import SecondHomeAboutGroup from "./SecondHomeAboutGroup";

function HomeAbout() {
  return (
    <section className={getStyles(styles, "ctn")}>
      <div className={getStyles(styles, "blueCtnWrapper")}>
        <FirstHomeAboutGroup />
        <SecondHomeAboutGroup />
      </div>
      <div className={getStyles(styles, "grayBackground")}></div>
    </section>
  );
}

const styles = {
  blueCtnWrapper: [
    "z-10",
    "bg-secondary",
    "rounded-xl",
    "w-72",
    "text-white",
    "grid",
    "grid-cols-1",
    "p-8",
    "pr-6",
    "text-lg",
    "sm:w-80",
    "sm:pl-10",
    "mdl:grid-cols-2",
    "mdl:w-8/12",
    "mdl:rounded-2xl",
    "mdl:px-20",
    "mdl:py-12",
    "relative",
  ],
  ctn: ["w-full", "mt-16", "flex", "justify-center", "md:mt-32", "relative"],
  grayBackground: [
    "hidden",
    "sm:block",
    "w-full",
    "h-48",
    "mdl:h-32",
    "bg-gray-300",
    "absolute",
    "top-1/2",
    "translate-y-[-50%]",
  ],
};
export default HomeAbout;

import getStyles from "../../Style";

function Project() {}

const styles = {
  ctn: ["flex", "flex-col", "justify-center", "p-5", "min-w-300", "sm:p-8"],
  heading: [
    "mb-10",
    "tracking-wide",
    "sm:mb-16",
    "mt-10",
    "text-center",
    "block",
    "text-4xl",
    "sm:text-5xl",
    "font-semibold",
],
  subCtn: ["leading-6", "lg:flex", "flex-row", "lg:items-start"],
  images: [
    "flex",
    "flex-col",
    "items-center",
    "lg:max-w-sm"
  ],
  image: [
    "rounded-xl",
    "w-72",
    "sm:w-96",
  ],
  itrArrows: [
    "flex",
    "justify-center",
    "mt-5",
    "sm:mt-7",
    "gap-4"
  ],
  leftArrow: [
    "w-7",
    "h-7",
    "sm:w-8",
    "sm:h-8",
    "rotate-180",
    "hover:scale-110",
    "hover:fill-lblue",
    "trans"
  ],
  rightArrow: [
    "w-7",
    "h-7",
    "sm:w-8",
    "sm:h-8",
    "hover:scale-110",
    "hover:fill-lblue",
    "trans"
  ],
};

export default Project;

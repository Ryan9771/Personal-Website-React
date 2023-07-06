import getStyles from "../../Style";

interface Props {
  firstPage: boolean;
}

function GeneralInfo({ firstPage }: Props) {
  return (
    <div>
      <div></div>
    </div>
  );
}

const styles = {
  ctn: [
    "hidden",
    "about-ctn",
    "w-full",
    "h-full",
    "flex-col",
    "px-6",
    "sm:px-12",
    "sm:text-lg",
    "md:flex-row",
    "md:items-center",
  ],
  divider: ["m-4", "h-[2px]", "bg-black", "w-1/2", "self-center", "md:hidden"],
  infoCtn: [
    "flex",
    "h-full",
    "justify-center",
    "items-center",
    "md:border-l-2",
    "md:border-l-black",
    "md:flex-3",
    "md:ml-4",
    "md:pl-24",
    "md:pr-12",
  ],
  infoFirstHeading: [
    "font-semibold",
    "mt-10",
    "sm:mt-16",
    "text-lg",
    "sm:text-xl",
    "md:mt-0",
    "px-3",
  ],
  infoFirstText: ["mt-3", "px-3"],
  infoSecondHeading: [
    "font-semibold",
    "mt-7",
    "text-lg",
    "sm:text-xl",
    "sm:mt-9",
    "md:mt-12",
    "px-3",
  ],
  infoSecondTextCtn: ["mt-3", "px-3"],
  infoSecondText: ["about-text-ctn-text"],
  link: ["color:rgb(57, 57, 167)"],
  titleCtn: [
    "py-2",
    "text-center",
    "md:flex",
    "md:items-center",
    "md:justify-center",
    "md:pr-4",
    "md:flex-2",
    "md:h-full",
  ],
  titleCtnText: [
    "font-bold",
    "text-2xl",
    "sm:text-4xl",
    "md:text-5xl",
    "lg:text-6xl",
  ],
};

export default GeneralInfo;

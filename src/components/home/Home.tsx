import getStyles from "../../Style";
import topRight from "../../../assets/images/topRight.png";
import btmLeft from "../../../assets/images/btmLeft.png";
import greece from "../../../assets/images/greece.png";

function Home() {
  return (
    <section className={getStyles(styles, "ctn")}>
      <div className={getStyles(styles, "introImgBox")}>
        <div className={getStyles(styles, "introBox")}>
          {img1}
          {img2}
          <span className={getStyles(styles, "heyThere")}>Hey there,</span>
          <span className={getStyles(styles, "imRyan")}>I'm Ryan</span>
          <span className={getStyles(styles, "intro")}>Hey there! I'm</span>
          <span className={getStyles(styles, "name")}>Ryan Patel</span>
          <span className={getStyles(styles, "miniText")}>
            A penultimate year computing student at Imperial College London
          </span>
        </div>

        <div className={getStyles(styles, "imgBox")}>{img3}</div>
      </div>
    </section>
  );
}

/* STYLES */
const styles = {
  ctn: ["flex", "w-full", "mt-24", "sm: mt-32"],
  introImgBox: [
    "w-full",
    "flex",
    "flex-col",
    "md:flex-row",
    "justify-center",
    "md:justify-around",
    "items-center",
    "px-6",
  ],
  introBox: [
    "relative",
    "leading-loose",
    "ml-4",
    "sm:w-[450px]",
    "sm:h-52",
    "md:ml-0",
    "lg:scale-110",
    "lg:ml-10",
  ],
  imgTop: [
    "hidden",
    "sm:inline",
    "absolute",
    "top-[-35px]",
    "right-0",
    "w-24",
    "h-16",
  ],
  imgBtm: [
    "hidden",
    "sm:inline",
    "absolute",
    "bottom-[-30px]",
    "left-[-43px]",
    "w-24",
    "h-16",
  ],
  heyThere: [
    "block",
    "text-5xl",
    "font-sans",
    "font-bold",
    "text-secondary",
    "sm:hidden",
  ],
  imRyan: [
    "block",
    "mt-5",
    "text-5xl",
    "font-sans",
    "font-bold",
    "text-header",
    "sm:hidden",
  ],
  intro: [
    "hidden",
    "sm:block",
    "text-5xl",
    "font-sans",
    "font-bold",
    "text-secondary",
  ],
  name: [
    "hidden",
    "sm:block",
    "mt-5",
    "text-5xl",
    "font-sans",
    "font-bold",
    "text-header",
    "sm:ml-10",
    "sm:text-6xl",
    "sm:mt-5",
    "tracking-wider",
  ],
  miniText: [
    "block",
    "w-11/12",
    "leading-6",
    "text-sm",
    "mt-7",
    "sm:w-64",
    "sm:ml-36",
    "sm:text-md",
  ],
  imgBox: ["flex", "justify-center", "sm:mt-16", "md:mt-0"],
  img: [
    "w-80",
    "mt-8",
    "rounded-xl",
    "border",
    "border-black",
    "lg:w-[360px]",
    "lg:hover:w-[370px]",
    "trans",
  ],
};

/* IMG CONSTANTS */
const img1 = (
  <img className={getStyles(styles, "imgTop")} src={topRight} alt="" />
);
const img2 = (
  <img className={getStyles(styles, "imgBtm")} src={btmLeft} alt="" />
);
const img3 = <img className={getStyles(styles, "img")} src={greece} alt="" />;

export default Home;

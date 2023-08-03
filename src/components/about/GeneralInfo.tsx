import getStyles from "../../Style";

function GeneralInfo() {
  return (
    <div id="about" className={getStyles(styles, "ctn")}>
      <div className={getStyles(styles, "titleCtn")}>
        <span className={getStyles(styles, "titleCtnText")}>About Me</span>
      </div>

      <div className={getStyles(styles, "divider")}></div>

      <div className={getStyles(styles, "infoCtn")}>
        <div>
          <div className={getStyles(styles, "infoFirstHeading")}>General</div>
          <div className={getStyles(styles, "infoFirstText")}>
            I am a 2nd year computing student at Imperial College London. I am a
            fast learner, since my journey in this field began only a year ago.
            In the span of a year, I have learnt multiple languages, frameworks,
            and touched different areas such as AI and Machine learning.
            Computing is truly a remarkable field that I wish to pursue to make
            more information readily accessible to people.
          </div>
          <div className={getStyles(styles, "infoSecondHeading")}>
            Interests
          </div>
          <div className={getStyles(styles, "infoSecondTextCtn")}>
            <span className={getStyles(styles, "infoSecondText")}>
              I love Web and App development. I have made multiple repositories
              on{" "}
              <a
                className={getStyles(styles, "linkGithub")}
                href="https://github.com/Ryan9771"
                target="_blank"
              >
                GitHub
              </a>
              experimenting with React Native. I am also interested in AI and
              Machine learning, after having constructed an OCR-related API in
              python involving these areas, during my internship at
              <a
                className={getStyles(styles, "linkIntern")}
                href="https://thewalnut.ai/"
                target="_blank"
              >
                The Walnut.ai
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  ctn: [
    "flex",
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
  linkGithub: ["color:rgb(57, 57, 167)", "mr-1", "text-blue-800"],
  linkIntern: ["color:rgb(57, 57, 167)", "ml-1", "text-blue-800"],
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

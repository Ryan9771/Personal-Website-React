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
            Hi, I'm a Technology Graduate Analyst at Capula Investment
            Management and a Computer Science master's graduate from Imperial
            College London. I'm passionate about building intelligent systems
            that combine software engineering, AI, and data to solve real-world
            problems. Outside of work, I enjoy playing snooker, music and
            constantly learning how things work behind the scenes.
          </div>
          <div className={getStyles(styles, "infoSecondHeading")}>
            Interests
          </div>
          <div className={getStyles(styles, "infoSecondTextCtn")}>
            <span className={getStyles(styles, "infoSecondText")}>
              I sometimes dabble in projects that I like to put on my{" "}
              <a
                className={getStyles(styles, "linkGithub")}
                href="https://github.com/Ryan9771"
                target="_blank"
              >
                GitHub
              </a>
              . Some of these include the very website you're on right now, some
              AI projects, along with small-scale experimentation projects with
              different tools.
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

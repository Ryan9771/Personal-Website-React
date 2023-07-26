import getStyles from "../../Style";

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
  subSubCtn: ["flex", "items-center", "flex-col", "lg:max-w-sm"],
  images: ["flex", "flex-col", "items-center", "lg:max-w-sm"],
  image: ["rounded-xl", "w-72", "sm:w-96"],
  itrArrows: ["flex", "justify-center", "mt-5", "sm:mt-7", "gap-4"],
  leftArrow: [
    "w-7",
    "h-7",
    "sm:w-8",
    "sm:h-8",
    "rotate-180",
    "hover:scale-110",
    "hover:fill-lblue",
    "trans",
  ],
  rightArrow: [
    "w-7",
    "h-7",
    "sm:w-8",
    "sm:h-8",
    "hover:scale-110",
    "hover:fill-lblue",
    "trans",
  ],
  githubBtn: ["mt-5", "md:mt-10"],
  githubBtnSubCtn: [
    "bg-black",
    "flex",
    "p-2",
    "rounded-lg",
    "items-center",
    "hover:scale-110",
    "trans",
  ],
  githubIcon: ["w-6", "h-6", "fill-white"],
  githubText: ["text-white", "ml-2"],
  bodyCtn: [
    "lg:flex",
    "lg:flex-col",
    "lg:flex-1",
    "lg:pl-8",
    "pr-2",
    "xl:pl-16",
  ],
  firstPara: ["mt-16", "sm:text-lg", "lg:mt-0"],
  mainPara: ["mt-5", "sm:text-lg"],
  featureCtn: [
    "mt-6",
    "sm:mt-12",
    "bg-gray-300",
    "p-3",
    "rounded-lg",
    "bg-opacity-90",
  ],
  featureTitle: ["text-xl", "sm:text-2xl", "font-medium"],
  featureList: ["list-disc", "mt-2", "ml-8", "sm:text-lg"],
};

const LeftArrow = (
  <svg
    className={getStyles(styles, "leftArrow")}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
  </svg>
);

const RightArrow = (
  <svg
    className={getStyles(styles, "rightArrow")}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
  </svg>
);

interface Props {
  title: string;
  // images: string[];
  github: string;
  body: string[];
  feature: {
    heading: string;
    list: string[];
  };
}

function Project({
  title,
  // images,
  github,
  body,
  feature: { heading, list },
}: Props) {
  const GithubIcon = (
    <svg
      className={getStyles(styles, "githubIcon")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
    >
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
    </svg>
  );

  return (
    <section className={getStyles(styles, "ctn")}>
      <div className={getStyles(styles, "heading")}>{title}</div>
      <div className={getStyles(styles, "subCtn")}>
        <div className={getStyles(styles, "subSubCtn")}>
          <div className={getStyles(styles, "itrArrows")}>
            <div className={getStyles(styles, "leftArrow")}>{LeftArrow}</div>
            <div className={getStyles(styles, "rightArrow")}>{RightArrow}</div>
          </div>
        </div>

        {/* Images */}
        <div></div>

        {/* Github */}
        <div className={getStyles(styles, "githubBtn")}>
          <a className={getStyles(styles, "githubBtnSubCtn")} href={github}>
            {GithubIcon}
          </a>
          <span className={getStyles(styles, "githubText")}>
            Click to see the Repo!
          </span>
        </div>

        {/* Main Body */}
        <div className={getStyles(styles, "bodyCtn")}>
          <div className={getStyles(styles, "firstPara")}>{body[0]}</div>
          {body.slice(1).map((para) => (
            <div className={getStyles(styles, "mainPara")}>{para}</div>
          ))}
          <div className={getStyles(styles, "featureCtn")}>
            <p className={getStyles(styles, "featureTitle")}>{heading}</p>
            <ul className={getStyles(styles, "featureList")}>
              {list.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;

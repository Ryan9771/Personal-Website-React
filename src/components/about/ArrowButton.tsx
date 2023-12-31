import getStyles from "../../Style";

interface Props {
  firstPage: boolean;
  setFirstPage: (firstPage: boolean) => void;
}

function ArrowButton({ firstPage, setFirstPage }: Props) {
  const handleClick = () => {
    setFirstPage(!firstPage);
  };

  return (
    <div onClick={handleClick} className={getStyles(styles, "ctn")}>
      <svg
        className={
          firstPage
            ? getStyles(styles, "svgFstPage")
            : getStyles(styles, "svgSndPage")
        }
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zm395.3 11.3l-112 112c-4.6 4.6-11.5 5.9-17.4 3.5s-9.9-8.3-9.9-14.8l0-64-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-64c0-6.5 3.9-12.3 9.9-14.8s12.9-1.1 17.4 3.5l112 112c6.2 6.2 6.2 16.4 0 22.6z" />
      </svg>
    </div>
  );
}

const styles = {
  ctn: [
    "hidden",
    "lg:inline-flex",
    "self-end",
    "mt-12",
    "mr-16",
    "hover:scale-125",
    "group",
    "trans",
    "cursor-pointer",
  ],
  svgFstPage: ["w-8", "h-8", "group-hover:fill-lblue", "trans", "rotate-0"],
  svgSndPage: ["w-8", "h-8", "group-hover:fill-lblue", "trans", "-rotate-180"],
};

export default ArrowButton;

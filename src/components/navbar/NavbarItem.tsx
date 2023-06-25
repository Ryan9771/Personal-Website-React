import getStyles, { trans } from "../../Style";

interface Props {
  id: string;
  href: string;
  title: string;
}

const target = (href: string, title: string) => {
  if (href === "https://github.com/Ryan9771") {
    return (
      <a href={href} className={getStyles(styles, "link")} target="_blank">
        <svg
          className={getStyles(styles, "svgs")}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM256 336c-18 0-32 14-32 32s13.1 32 32 32c17.1 0 32-14 32-32S273.1 336 256 336zM289.1 128h-51.1C199 128 168 159 168 198c0 13 11 24 24 24s24-11 24-24C216 186 225.1 176 237.1 176h51.1C301.1 176 312 186 312 198c0 8-4 14.1-11 18.1L244 251C236 256 232 264 232 272V288c0 13 11 24 24 24S280 301 280 288V286l45.1-28c21-13 34-36 34-60C360 159 329 128 289.1 128z" />
        </svg>
        <span className={getStyles(styles, "text")}>{title}</span>
      </a>
    );
  }

  return (
    <a href={href} className={getStyles(styles, "link")}>
      <svg
        className={getStyles(styles, "svgs")}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM256 336c-18 0-32 14-32 32s13.1 32 32 32c17.1 0 32-14 32-32S273.1 336 256 336zM289.1 128h-51.1C199 128 168 159 168 198c0 13 11 24 24 24s24-11 24-24C216 186 225.1 176 237.1 176h51.1C301.1 176 312 186 312 198c0 8-4 14.1-11 18.1L244 251C236 256 232 264 232 272V288c0 13 11 24 24 24S280 301 280 288V286l45.1-28c21-13 34-36 34-60C360 159 329 128 289.1 128z" />
      </svg>
      <span className={getStyles(styles, "text")}>{title}</span>
    </a>
  );
};

function NavbarItem({ id, href, title }: Props) {
  return (
    <li id={id} className={getStyles(styles, "ctn")}>
      {target(href, title)}
    </li>
  );
}

const styles = {
  ctn: [
    "sm:py-[3px]",
    "sm:px-[5px]",
    "rounded-lg",
    "sm:hover:bg-orangy",
    "sm:hover:fill-white",
    "sm:hover:text-white",
    "sm:hover:scale-110",
    "sm:mr-2",
    "md:mr-6",
  ].concat(trans),
  link: ["flex", "justify-center", "items-center"],
  svgs: ["p-[2px]", "mr-4", "sm:mr-1", "w-6", "h-6", "fill-inherit"],
  text: ["hidden", "sm:inline", "text-base", "font-medium"],
};

export default NavbarItem;

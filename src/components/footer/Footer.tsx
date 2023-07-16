import getStyles from "../../Style";

function Footer() {
  return (
    <section className={getStyles(styles, "ctn")}>
      <span className={getStyles(styles, "text")}>© Ryan Patel 2022</span>
    </section>
  );
}

const styles = {
  ctn: [
    "w-full",
    "mt-10",
    "py-5",
    "md:py-8",
    "flex",
    "items-center",
    "justify-center",
    "border-t",
    "border-t-gray-300",
  ],
  text: ["font-bold", "tracking-wide"],
};

export default Footer;

import getStyles from "../../Style";

function Projects() {
  return (
    <section className={getStyles(styles, "ctn")}>
      <span className={getStyles(styles, "title")}>Projects</span>
    </section>
  );
}

const styles = {
  ctn: ["w-full", "mt-16", "flex", "flex-col", "items-center", "sm:mt-24"],
  title: [
    "block",
    "text-3xl",
    "mb-5",
    "font-bold",
    "sm:text-4xl",
    "sm:mb-12",
    "md:text-5xl",
  ],
  projectCtn: [
    "flex",
    "flex-wrap",
    "justify-center",
    "items-center",
    "lg:px-2",
  ],
};

export default Projects;

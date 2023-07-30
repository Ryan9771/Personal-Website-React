import getStyles from "../../Style";
import { translate } from "./util/translator";

interface Props {
  maxView: null | number;
}

const projects = [
  "discord",
  "calculator",
  "tictactoe",
  "wordle",
  "foobar",
  "dataStructures",
  "ecommute",
  "wacc",
];

function Projects({ maxView }: Props) {
  const translatedProjects = maxView
    ? projects.slice(0, maxView).map((project) => translate(project))
    : projects.map((project) => translate(project));

  return (
    <section id="projects" className={getStyles(styles, "ctn")}>
      <span className={getStyles(styles, "title")}>Projects</span>
      <div className={getStyles(styles, "projectCtn")}>
        {translatedProjects}
      </div>
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

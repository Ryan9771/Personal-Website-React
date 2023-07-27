import Project, { ProjectProps } from "../util/Project";
import foobarExplanation from "../../../assets/images/googleFoobar/foobarExplanation.png";
import solutions from "../../../assets/images/googleFoobar/solutions.png";

const Template: ProjectProps = {
  title: "Google Foobar Solutions",
  images: [foobarExplanation, solutions],
  github: "https://github.com/Ryan9771/Google-Foobar-Solutions",
  body: [
    `The Google foobar challenges is a set of challenges that Google selectively sends out based on your search patterns. For example, a friend of mine needed to take a basic coding module. Upon using Google Chrome for a lot of coding-related searches, Google seemed to have sent out an invite for my friend to accept. I ended up doing the challenges on their behalf since they were not too interested in doing it.`,
    `This repository therefore contains the solutions to the Google Foobar that I had completed so far. Feel free to check these out, but I recommend giving it a try yourself before looking at the solutions. These solutions are in Java. They also often include some tests and comments to display the workings of the solutions.`,
  ],
  feature: {
    heading: "Solutions are currently to:",
    list: [
      "Bomb Baby",
      "Bunny worker locations",
      "Hey I already did that",
      "Ion flux relabelling",
      "Minion",
      "Please pass the coded messages",
      "Queue to do",
      "Reid",
    ],
  },
};

function Foobar() {
  return <Project {...Template} />;
}

export default Foobar;

import Project, { ProjectProps } from "../util/Project";
import structures from "../../../assets/images/dataStructures/structures.png";
import test from "../../../assets/images/dataStructures/test.png";

const Template: ProjectProps = {
  title: "Data Structures & Algos in Java",
  images: [test, structures],
  github: "https://github.com/Ryan9771/Data-Structures",
  body: [
    `I find data structures and the way they work fascinating. It is incredible how data could be stored and retrieved in many ways. I therefore, decided to try to explore multiple data structures that I was not familiar with, in an attempt, to learn more. Most of these structures will have a main function which tests out the functionality of the structure, and may even print out a visual representation of it.`,
    `In addition to data structures, I also wanted to recollect various well known algorithms that prove useful to many scenarious in daily life. As such, you will find these here too in my repository.`,
  ],
  feature: {
    heading: "Includes",
    list: [
      "Linked List (3 types)",
      "MinHeaps (2 different implementations)",
      "MaxHeaps (2 different implementations)",
      "Deque",
      "Priority Queue",
      "Queue",
      "Stacks",
      "Binary Search Trees",
      "AVL Trees",
      "Red Black Trees",
    ],
  },
};

function DataStructures() {
  return <Project {...Template} />;
}

export default DataStructures;

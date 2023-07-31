import Project, { ProjectProps } from "../util/Project";
import pintos from "../../../assets/images/pintos/pintos.png";

const Template: ProjectProps = {
  title: "Pintos Operating System",
  images: [pintos],
  github: "https://gitlab.doc.ic.ac.uk/lab2223_autumn/pintos_20",
  body: [
    `Pintos is a simple operating system framework for the 80x86
        architecture. It supports kernel threads, loading and running user
        programs, and a file system, but it implements all of these in a very
        simple way.`,
    `Over the course of this project, my team and I implemented various 
        features to the Pintos operating system, including a priority scheduler,
        a multi-level feedback queue scheduler, a multi-level feedback queue
        scheduler with priority donation, a user program memory allocator, a
        virtual memory system and a file system.`,
    `Working on all of these features was a great learning experience that 
        taught me more about the underlying complexities of the devices we use 
        everyday.`,
  ],
  feature: {
    heading: "Some Featuers",
    list: [
      "Semaphores, mutexes, condition variables, and read-write locks",
      "Priority Scheduler",
      "Multi-level Feedback Queue Scheduler",
      "Multi-level Feedback Queue Scheduler with Priority Donation",
      "User Program Memory Allocator",
      "Virtual Memory System",
      "File System",
    ],
  },
};

function Pintos() {
  return <Project {...Template} />;
}

export default Pintos;

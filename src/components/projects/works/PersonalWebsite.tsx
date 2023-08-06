import Project, { ProjectProps } from "../util/Project";
import aboutMe from "../../../assets/images/personalWebsite/aboutMe.png";
import homePage from "../../../assets/images/personalWebsite/homePage.jpeg";
import projects from "../../../assets/images/personalWebsite/projects.png";

const Template: ProjectProps = {
  title: "Personal Website",
  images: [projects, homePage, aboutMe],
  github: "https://github.com/Ryan9771/Personal-Website-React",
  body: [
    `My personal website is a showcase of how far I have come as a 
        frontend developer. It began with, at the time, a small interest in 
        learning how to make a website. I had no idea how to begin, nor had 
        any experience in how to design a website. To motivate myself to learn, 
        I decided to undertake a personal website project.`,

    `This originally began as a simple HTML, CSS and JavaScript project to 
        learn the fundamentals of web development before learning to use any 
        other libraries or frameworks. This went well and I was able to create 
        a functional website that displayed all my information. However, the 
        website looked very ugly and was not mobile responsive. I then 
        proceeded to try to make the website responsive, however, going through 
        more than few thousand lines of CSS was not a fun experience, and 
        it became too out of hand.`,

    `It was then that I decided to start again from scratch, designing my 
        website using insipiration from different real websites, using 
        tailwind css this time. This was a much better experience that 
        enabled me to use pseudo classes to make the website mobile responsive.
        This reduced the number of lines of code by a significant amount, and I
        was able to deploy this website using github pages. However, as good 
        as the website looked, it was difficult to maintain and modify. As 
        a result, I started from scratch again, using React and tailwind css 
        to produce the website you see today. This makes it much easier to 
        add new projects and modify components.
        `,
  ],
  feature: {
    heading: "Some Features",
    list: [
      "A short introduction about myself",
      "A list of things that I am currently doing or have done",
      "More about me",
      "My contact info, resume, github and linkedin",
      "A list of some of my projects",
    ],
  },
};

function PersonalWebsite() {
  return <Project {...Template} />;
}

export default PersonalWebsite;

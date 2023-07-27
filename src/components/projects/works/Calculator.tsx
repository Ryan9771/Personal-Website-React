import Project, { ProjectProps } from "../util/Project";
import calcHome from "../../../assets/images/calculator/calcHome.png";
import calc from "../../../assets/images/calculator/calculator.png";
import comma from "../../../assets/images/calculator/comma.png";

const Template: ProjectProps = {
  title: "iOS Calculator Clone",
  images: [calcHome, calc, comma],
  github: "https://github.com/Ryan9771/Calculator",
  body: [
    `A replica of the famous iOS iPhone calculator. This project was done in 
     react native. I undertook this project to brush up on my design skills. 
     I hence tried to replicate the design of the calculator as close as possible 
     to the original.`,
    `Since this is a calculator after all, I implemented the calculator 
    functionality to the application, and it is hence able to perform all 
    operator functions, along with the combined usage of operators in 
    consecutive calculations.`,
    `Some difficulties I encountered during this project was the introduction of 
    commas between numbers more digits get entered on the screen. Accounting for 
    the horizontal padding and font size with more digits also posed a 
    challenge. However, it was a good learning experience that got me more 
    familiar with javascript.`,
  ],
  feature: {
    heading: "Some Features",
    list: [
      "Able to chain multiple operators together",
      "Made to produce commas every 3 digits, using regex",
      "Made to be visually as identical to the original application as possible",
    ],
  },
};

function Calculator() {
  return <Project {...Template} />;
}

export default Calculator;

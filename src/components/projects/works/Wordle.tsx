import Project, { ProjectProps } from "../util/Project";
import colourCode from "../../../assets/images/wordle/colourCode.png";
import emptyWordle from "../../../assets/images/wordle/emptyWordle.png";
import game from "../../../assets/images/wordle/game.png";

const Template: ProjectProps = {
  title: "Wordle Clone",
  images: [colourCode, emptyWordle, game],
  github: "https://github.com/Ryan9771/Wordle_Clone",
  body: [
    `Wordle is a popular game that makes your brain think while deciphering a word. At the time of making this, this app was the craze. It was in fact, introduced to me by my mother, who played it regularly. As a coding challenge, I thought what better way to make your brain think than to try to recreate the app.`,
    `I made this app using Java. Shown in the images is a sample game that I played, where the last 2 rows were quite unlucky, but oh well. This was an extremely fun app to make where I got to learn alot about event listeners, key listeners, JFrame, swing, and it also made me think alot about how to implement certain algorithms.`,
    `The biggest challenge I faced was coming up with an algorithm to colour certain letters orange, since simply iterating through the letters in the word will not work in the case that there are duplicate letters. Furthermore, certain letters may quality to be coloured orange and green, if not implemented correctly. My algorithm is shown in the images displayed. Other challenges include doing nothing when clicking enter before entering 5 letters in a line, and also going back to previous lines when an enter is pressed.`,
  ],
  feature: {
    heading: "Some Features",
    list: [
      "Random word every game",
      "Customisable words",
      "Orange, green and black colours, like the original",
      "Reveals the word at the end of the game",
    ],
  },
};

function Wordle() {
  return <Project {...Template} />;
}

export default Wordle;

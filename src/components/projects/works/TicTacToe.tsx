import Project, { ProjectProps } from "../util/Project";
import homePage from "../../../assets/images/ticTacToe/homePage.png";
import multWin from "../../../assets/images/ticTacToe/multWin.png";
import singlePlayer from "../../../assets/images/ticTacToe/singlePlayer.png";
import ticTacToeHome from "../../../assets/images/ticTacToe/ticTacToeHome.png";

const Template: ProjectProps = {
  title: "Tic Tac Toe",
  images: [ticTacToeHome, homePage, singlePlayer, multWin],
  github: "https://github.com/Ryan9771/React-Native-Tic-Tac-Toe",
  body: [
    `Tic Tac Toe, done in React Native. This was one of my first projects completed in react native. Therefore, it was an introductory project that I aimed to include as much basic knowledge of the framework as possible into it.`,
    `I started off by creating a multiplayer mode, as most Tic Tac Toe games go. From this I had learnt how to pass around values from one component to another, which is quite challenging to grasp at first. To spice things up, I introduced different animations upon a draw, a win, and a loss.`,
    `To dive further into algorithms, as an extension, I implemented a single player mode using the minimax algorithm. I hence built an unbeatable AI. A further extension to this project could include a slightly easier AI to play with by randomising the outcome of the AI based on the depth of the recursion of the minimax algorithm.`,
  ],
  feature: {
    heading: "Some Features",
    list: [
      "Single player mode",
      "Multiplayer mode",
      "Confetti animations",
      "Strikethrough animations upon win",
      "Home screen for player to choose their mode",
      "Miimax algorithm - unbeatable AI",
    ],
  },
};

function TicTacToe() {
  return <Project {...Template} />;
}

export default TicTacToe;

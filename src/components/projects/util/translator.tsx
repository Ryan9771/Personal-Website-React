import ProjectLink from "./ProjectLink";

export const translate = (id: string) => {
  switch (id) {
    case "discord":
      return (
        <ProjectLink
          id="discord"
          title="Discord Bot"
          description="An interactive bot for my school discord server"
          backgroundImg="/src/assets/images/discordBot/discord1.png"
        />
      );
    case "calculator":
      return (
        <ProjectLink
          id="calculator"
          title="iOS Calculator Clone"
          description="A clone of the famous iOS calculator"
          backgroundImg="/src/assets/images/calculator/calcHome.png"
        />
      );
    case "tictactoe":
      return (
        <ProjectLink
          id="tictactoe"
          title="Tic Tac Toe"
          description="A single and multiplayer tic tac toe game"
          backgroundImg="/src/assets/images/ticTacToe/ticTacToeHome.png"
        />
      );
    case "wordle":
      return (
        <ProjectLink
          id="wordle"
          title="Wordle Clone"
          description="A fully functioning Wordle game"
          backgroundImg="/src/assets/images/wordle/game.png"
        />
      );

    case "foobar":
      return (
        <ProjectLink
          id="foobar"
          title="Google Foobar"
          description="Solutions to Google's secret Foobar challenge"
          backgroundImg="/src/assets/images/google_foobar/solutions.png"
        />
      );
    case "dataStructures":
      return (
        <ProjectLink
          id="dataStructures"
          title="Data Structures"
          description="Over 13 data structures, in Java"
          backgroundImg="/src/assets/images/data_structures/structures.png"
        />
      );
  }
};

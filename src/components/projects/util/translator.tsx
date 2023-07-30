import ProjectLink from "./ProjectLink";
import discord from "../../../assets/images/discordBot/discord1.png";
import calculator from "../../../assets/images/calculator/calcHome.png";
import tictactoe from "../../../assets/images/ticTacToe/ticTacToeHome.png";
import wordle from "../../../assets/images/wordle/game.png";
import foobar from "../../../assets/images/googleFoobar/solutions.png";
import dataStructures from "../../../assets/images/dataStructures/structures.png";
import ecommute from "../../../assets/images/ecommute/homePage.png";
import wacc from "../../../assets/images/wacc/wacc.png";

export const translate = (id: string) => {
  switch (id) {
    case "discord":
      return (
        <ProjectLink
          id="discord"
          key={id}
          title="Discord Bot"
          description="An interactive bot for my school discord server"
          backgroundImg={discord}
        />
      );
    case "calculator":
      return (
        <ProjectLink
          id="calculator"
          key={id}
          title="iOS Calculator Clone"
          description="A clone of the famous iOS calculator"
          backgroundImg={calculator}
        />
      );
    case "tictactoe":
      return (
        <ProjectLink
          id="tictactoe"
          key={id}
          title="Tic Tac Toe"
          description="A single and multiplayer tic tac toe game"
          backgroundImg={tictactoe}
        />
      );
    case "wordle":
      return (
        <ProjectLink
          id="wordle"
          key={id}
          title="Wordle Clone"
          description="A fully functioning Wordle game"
          backgroundImg={wordle}
        />
      );

    case "foobar":
      return (
        <ProjectLink
          id="foobar"
          key={id}
          title="Google Foobar"
          description="Solutions to Google's secret Foobar challenge"
          backgroundImg={foobar}
        />
      );
    case "dataStructures":
      return (
        <ProjectLink
          id="dataStructures"
          key={id}
          title="Data Structures"
          description="Over 13 data structures, in Java"
          backgroundImg={dataStructures}
        />
      );
    case "ecommute":
      return (
        <ProjectLink
          id="ecommute"
          key={id}
          title="Ecommute"
          description="A new way to search for properties"
          backgroundImg={ecommute}
        />
      );
    case "wacc":
      return (
        <ProjectLink
          id="wacc"
          key={id}
          title="Wacc Compiler"
          description="A full compiler and executer for a made up language"
          backgroundImg={wacc}
        />
      );
  }
};

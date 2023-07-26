import { ProjectProps } from "../Project";
import Project from "../Project";
import discord1 from "../../../assets/images/discord_bot/discord_1.png";

const Template: ProjectProps = {
  title: "Bot for Discord",
  images: [discord1],
  github: "https://github.com/Ryan9771/General-Purpose-Discord-Bot",
  body: [
    `This discord bot was made to make my school discord server lively, 
        and to learn about the discord API. Rather than importing an existing 
        bot to use, I felt that creating my own bot from scratch was a good 
        learning opportunity.`,

    `I started off the project with the classic ping-pong request-response 
        as illustrated in the API tutorials. However, I decided to take this 
        further and integrate different APIs to use so that users can retrieve 
        information from the web without having to visit a website or search on google. 
        Check out the features below!`,
  ],
  feature: {
    heading: "Some Features",
    list: [
      "Responds back to trigger words",
      "Asynchronous timers",
      "Asynchronous reminders",
      "Retrieve weather data",
      "Retrieve football scores",
      "Learns commands from within the channel",
      "Shakes an 8ball to give an answer",
      "...and more!",
    ],
  },
};

function Discord() {
  return <Project {...Template} />;
}

export default Discord;

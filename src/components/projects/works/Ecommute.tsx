import Project, { ProjectProps } from "../util/Project";
import homePage from "../../../assets/images/ecommute/homePage.png";
import enterDetails from "../../../assets/images/ecommute/enterDetails.png";
import results from "../../../assets/images/ecommute/results.png";

const Template: ProjectProps = {
  title: "Ecommute",
  images: [homePage, enterDetails, results],
  github: "https://github.com/Ryan9771/Ecommute",
  body: [
    `I recently had the opportunity to participate in the UK's largest 
    student-run hackathon called IC Hack. It was a huge event with over 
    500 participants and many sponsors including Cisco , Optiver and 
    Blackrock .`,
    `We decided to build something that fitted into the category of 
    sustainability with the element of convenience. This involved allowing users 
    to enter in a list of destinations that they are most likely to travel to, 
    and a city. It is that easy, and behind the scenes, our app will find 
    properties that are optimally close to all of these locations with the bonus 
    of being close to a public transport service. We hoped commuters would then 
    be incentivised to take public transport / cycling / walking routes rather 
    than travelling to their destinations by personal carbon-emitting vehicles. 
    Hence, the name of our project "ecommute".`,
    `An extension to our project was to include price ranges, bedrooms and the 
    maximum time that they would like to travel to reach any of their listed 
    destinations from the property.`,
  ],
  feature: {
    heading: "Some Features",
    list: [
      "Enter a city and a list of places you would like to stay near to",
      "View a list of properties that are close to all of these locations",
      "View the distance to each of these locations from the property",
      "Include additional filters such as max price, number of bedrooms and transport time",
    ],
  },
};

function Ecommute() {
  return <Project {...Template} />;
}

export default Ecommute;

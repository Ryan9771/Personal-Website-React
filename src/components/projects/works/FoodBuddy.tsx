import Project, { ProjectProps } from "../util/Project";
import dashboard from "../../../assets/images/foodBuddy/dashboard.png";
import fridge from "../../../assets/images/foodBuddy/fridge.png";
import recipes from "../../../assets/images/foodBuddy/recipes.png";

const Template: ProjectProps = {
  title: "Food Buddy",
  images: [dashboard, fridge, recipes],
  github: "https://github.com/tangboxuan/drp-23",
  body: [
    `Food Buddy is a progressive web application that primarily aims to reduce food 
        waste among students. It does so by maintaining a list of food items 
        that the student has in their fridge, while also alerting users when 
        their ingredients are about to expire. Furthermore, the app also 
        suggests recipes that the user can cook based on the ingredients that 
        are expiring. This further aids students who are relatively 
        inexperienced in cooking.`,
    `This was one of the greatest projects that I have worked in so far
        because it was the first project where iterations were actively done based 
        on user feedback, following the Human Centered Design process, and with 
        more inputs from the Royal College of Art`,
    `React was used for the frontend with Capacitor.js to allow for native
        compilation to Android and iOS with the same code base. The backend was 
        written using flask due to its lightweight nature and well documentation.
        Additionally, other tools were used such as tailwind css, midjourney 
        and figma for prototyping and design.`,
  ],
  feature: {
    heading: "Some Features",
    list: [
      "Expiry-coded colours around ingredients on the quick view dashboard",
      "Alerts when ingredients are expiring",
      "Recipe suggestions based on ingredients that are expiring",
      "Add, delete and edit your ingredients",
      "Works on a web browser, on Android and iOS devices",
    ],
  },
};

function FoodBuddy() {
  return <Project {...Template} />;
}

export default FoodBuddy;

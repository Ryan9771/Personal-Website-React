import getStyles from "../../Style";
import { useState } from "react";

import GeneralInfo from "./GeneralInfo";
import ContactInfo from "./ContactInfo";

function About() {
  const [firstPage, setFirstPage] = useState(true);

  return (
    <div className={getStyles(styles, "ctn")}>
      {/* {firstPage ? <GeneralInfo /> : <ContactInfo />} */}
      <ContactInfo />
    </div>
  );
}

const styles = {
  ctn: [
    "w-full",
    "md:h-1",
    "md:min-h-36",
    "mt-16",
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "relative",
    "md:mt-24",
    "lg:mt-22",
  ],
};

export default About;

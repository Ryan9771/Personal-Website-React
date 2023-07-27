import getStyles from "../../Style";

import GeneralInfo from "./GeneralInfo";
import ContactInfo from "./ContactInfo";
import ArrowButton from "./ArrowButton";
import TabButton from "./TabButton";
import { AboutProps } from "../AppInner";

function About({ firstPage, setFirstPage }: AboutProps) {
  return (
    <>
      <section className={getStyles(styles, "ctn")}>
        {firstPage ? <GeneralInfo /> : <ContactInfo />}
      </section>

      <section className={getStyles(styles, "btnsCtn")}>
        <TabButton firstPage={firstPage} setFirstPage={setFirstPage} />
        <ArrowButton firstPage={firstPage} setFirstPage={setFirstPage} />
      </section>
    </>
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
  btnsCtn: ["w-full", "flex", "flex-col", "justify-center", "items-center"],
};

export default About;

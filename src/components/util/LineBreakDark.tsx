import getStyles from "../../Style";

function LineBreakDark() {
  return <hr className={getStyles(styles, "hr")} />;
}

const styles = {
  hr: ["m-12", "h-px", "bg-gray-300", "lg:mt-14"],
};

export default LineBreakDark;

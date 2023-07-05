import getStyles from "../../Style";

function LineBreakLight() {
  return <hr className={getStyles(styles, "hr")} />;
}

const styles = {
  hr: ["m-14", "h-px", "bg-gray-200", "md:hidden"],
};

export default LineBreakLight;

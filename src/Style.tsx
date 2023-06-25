export interface RawStyles {
  [key: string]: string[];
}

export const trans = ["transition", "duration-200"];

function getStyles(stylesList: RawStyles, key: string): string {
  const requiredStyle = stylesList[key];
  if (!requiredStyle) {
    return "text-red-300 bg-red-300";
  }
  return requiredStyle.join(" ");
}

export default getStyles;

import getStyles from "../../../Style";

interface Props {
  onIncrement: () => void;
  onDecrement: () => void;
}

function GroupButtons({ onIncrement, onDecrement }: Props) {
  return (
    <div className={getStyles(styles, "ctn")}>
      <div onClick={onDecrement} className={getStyles(styles, "btnPrev")}>
        Prev
      </div>
      <div onClick={onIncrement} className={getStyles(styles, "btnNext")}>
        Next
      </div>
    </div>
  );
}

const styles = {
  ctn: ["flex", "justify-between", "items-center", "mt-10", "p-3"],
  btnPrev: [
    "rounded-full",
    "p-2",
    "px-4",
    "text-sm",
    "bg-gray-100",
    "cursor-pointer",
    "hover:bg-gray-200",
    "hover:scale-105",
    "border-2",
    "mr-8",
    "md:mr-10",
  ],
  btnNext: [
    "rounded-full",
    "p-2",
    "px-4",
    "text-sm",
    "bg-gray-100",
    "cursor-pointer",
    "hover:bg-gray-200",
    "hover:scale-105",
    "border-2",
  ],
};

export default GroupButtons;

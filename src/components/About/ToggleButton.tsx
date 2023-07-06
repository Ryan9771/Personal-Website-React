import getStyles from "../../Style";

interface Props {
    firstPage: boolean;
    setFirstPage: (firstPage: boolean) => void;
}

function ToggleButton({ firstPage, setFirstPage }: Props) {

    const handleClick = () => {
        setFirstPage(!firstPage);
        if (firstPage) {
            // Animate transition
        } else {
            // Animate transition
        }
    }

}
import Project, { ProjectProps } from "../util/Project";

const Template: ProjectProps = {
    title: "Wacc",
    images: [],
    github: "",
    body: [],
    feature: {
        heading: "",
        list: []
    }
}

function Wacc() {
    return <Project {...Template} />;
}

export default Wacc;
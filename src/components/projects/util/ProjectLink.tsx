import { Link } from "react-router-dom";

interface Props {
  key: string;
  title: string;
  description: string;
  backgroundImg: string;
}

function ProjectLink({ key, title, description, backgroundImg }: Props) {
  return (
    <Link to={`/projects/${key}`} className="card">
      <div
        style={{ backgroundImage: `url(${backgroundImg})` }}
        className={"card-img trans"}
      ></div>
      <div className="card-head-desc">
        <span className="card-head">{title}</span>
        <p className="card-head-desc-text">{description}</p>
      </div>
    </Link>
  );
}

export default ProjectLink;

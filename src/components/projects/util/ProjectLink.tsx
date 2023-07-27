import { HashLink } from "react-router-hash-link";

interface Props {
  id: string;
  title: string;
  description: string;
  backgroundImg: string;
}

function ProjectLink({ id, title, description, backgroundImg }: Props) {
  return (
    <HashLink to={`/projects/${id}#`} className="card">
      <div
        style={{ backgroundImage: `url(${backgroundImg})` }}
        className={"card-img trans"}
      ></div>
      <div className="card-head-desc">
        <span className="card-head">{title}</span>
        <p className="card-head-desc-text">{description}</p>
      </div>
    </HashLink>
  );
}

export default ProjectLink;

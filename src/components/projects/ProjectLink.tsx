import { Link } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  description: string;
  backgroundImg: string;
}

function ProjectLink({ id, title, description, backgroundImg }: Props) {
  return (
    <Link to={`/projects/${id}`} className="card">
      <div className={`card-img trans bg-${backgroundImg}`}></div>
      <div className="card-head-desc">
        <span className="card-head">{title}</span>
        <p className="card-head-desc-text">{description}</p>
      </div>
    </Link>
  );
}

export default ProjectLink;

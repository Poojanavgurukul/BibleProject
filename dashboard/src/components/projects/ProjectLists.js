import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectLists = ({projects}) => {
    return (  
        <div className="project-list section">
            {projects && projects.map((project) =>(
                <Link to={`/project/${project.id}`} key={project.id}>
                    <ProjectSummary  project={project} />
                </Link>
            ))}
        </div>
    );
}
 
export default ProjectLists;
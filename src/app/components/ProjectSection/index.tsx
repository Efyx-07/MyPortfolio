import Project from "@/app/types/projectType";
import useProjects from "@/app/services/useProjects";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {

    const projects: Project[] = useProjects();

    return (
        <section className="project-section">
            <div className="content">
                <div className="projectCards-container">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}
import Project from "@/app/types/projectType";
import useProjects from "@/app/services/useProjects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "../Reusables/SectionTitle";
import '../../../assets/sass/sections-common-style.scss';
import './ProjectSection.scss';

export default function ProjectSection() {

    const projects: Project[] = useProjects();

    return (
        <section className="project-section">
            <div className="content">
                <SectionTitle title="Projets récents" />
                <div className="projectCards-container">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}
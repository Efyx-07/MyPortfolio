import { Project } from "@/types";
import useProjects from "@/hooks/useProjects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "../Reusables/SectionTitle";
import '../../assets/sass/sections-common-style.scss';
import './ProjectSection.scss';

export default function ProjectSection() {

    const projects: Project[] = useProjects();

    return (
        <section className="project-section">
            <div className="content">
                <SectionTitle title="Mes projets récents" />
                <div className="projectCards-container">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}
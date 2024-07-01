import { motion } from "framer-motion";
import { cardVariants } from "@/framer-motion/cardVariants";
import { Project } from "@/types";
import useProjects from "@/hooks/useProjects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "../Reusables/SectionTitle";
import '../../assets/sass/sections-common-style.scss';
import './ProjectSection.scss';
import './ProjectCard.scss';

export default function ProjectSection() {

    const projects: Project[] = useProjects();

    return (
        <section className="project-section">
            <div className="content">
                <SectionTitle title="Mes projets récents" />
                <div className="projectCards-container">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            className="project-card"
                        >
                            <ProjectCard key={project.id} project={project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
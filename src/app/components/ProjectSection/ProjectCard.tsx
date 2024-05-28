import Project from "@/app/types/projectType";
import Image from "next/image";
import Button from "../Reusables/Button";
import './ProjectCard.scss';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {

    return (
        <div className="project-card">
            <div className="image-container">
                <Image 
                    className="img"
                    src={`/images/projects/${project.image.source}`}
                    layout="responsive"
                    width={500}
                    height={500}
                    objectFit="cover"
                    alt={project.image.alt}
                />
            </div>
            <div className="project-description">
                <div className="text-container">
                    <p className="stack">{project.stack}</p>
                    <p className="title">{project.title}</p>
                    <p className="description">{project.description}</p>
                </div>
                <Button name="En savoir plus" />
            </div>
        </div>
    )
}
import Project from "@/app/types/projectType";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "../Reusables/Button";
import './ProjectCard.scss';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {

    const router = useRouter();

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
                    <div className="stacks-container">
                        {project.stacks.map(stack => (
                            <p key={stack.name} className="stack">{stack.name}</p>
                        ))}
                    </div>
                    <p className="title">{project.title}</p>
                    <p className="description">{project.description}</p>
                    <p className="date">{project.date}</p>
                </div>
                <Button name="En savoir plus" onClick={()=> router.push(`/project/${project.slug}`)}/>
            </div>
        </div>
    )
}
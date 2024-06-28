import { Project } from "@/app/types";
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
                    width={1000}
                    height={1000}
                    alt={project.image.alt}
                    priority
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
                </div>
                <Button name="En savoir +" onClick={()=> router.push(`/project/${project.slug}`)}/>
            </div>
        </div>
    )
}
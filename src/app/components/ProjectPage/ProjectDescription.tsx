"use client"

import Project from "@/app/types/projectType";
import Button from "../Reusables/Button";
import Separator from "../Reusables/Separator";
import '../../../assets/sass/sections-common-style.scss';
import './ProjectDescription.scss';

interface ProjectDescriptionProps {
    project: Project;
}

export default function ProjectDescription({ project }: ProjectDescriptionProps) {
    return (
        <section>
            <div className="content">
                <div className="project-description">
                    <h2>{project.title}</h2>
                    <p className="project-description">{project.description}</p>
                    <Separator />
                    <div className="presentation-links-container">
                        <p className="presentation">{project.presentation}</p>
                        <div className="buttons-container">
                            {project.buttons.map(button => (
                                <Button 
                                    key={button.name}
                                    className="button"
                                    name={button.name}
                                    link={button.link}
                                    icon={button.icon}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
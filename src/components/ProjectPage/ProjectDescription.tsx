"use client"

import { Project } from "@/types";
import Button from "../Reusables/Button";
import { motion } from "framer-motion";
import '../../assets/sass/sections-common-style.scss';
import './ProjectDescription.scss';

interface ProjectDescriptionProps {
    project: Project;
}

export default function ProjectDescription({ project }: ProjectDescriptionProps) {
    
    return (
        <section>
            <div className="content">
                <div className="project-description-container">
                    <div className="project-head">
                        <h2>{project.title}</h2>
                        <p className="project-description">{project.description}</p>
                    </div>
                    <div className="presentation-links-container">
                        <div className="presentation-container">
                            <p className="project-detail">Développement {project.devType} | {project.date}</p>
                            <p className="presentation">{project.presentation}</p>
                            <div className="project-themes">
                                {project.themes.map(theme => (<p key={theme.name} className="theme">{theme.name}</p>))}
                            </div>
                            
                        </div>
                        <div className="buttons-container">
                            {project.buttons.map(button => (
                                <Button 
                                    key={button.name}
                                    className={button.name === 'Code' ? 'secondaryBtn button' : 'button'}
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
"use client"

import { Project } from "@/app/types";
import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import '../../../assets/sass/sections-common-style.scss';
import './ProjectsNavigator.scss';

interface ProjectsNavigatorProps {
    projects: Project[];
    project: Project | undefined;
}

export default function ProjectsNavigator({projects, project}: ProjectsNavigatorProps) {

    const {projectSlug} = useParams();
    const router = useRouter();
    const slug = Array.isArray(projectSlug) ? projectSlug[0] : projectSlug;

    const [currentProject, setCurrentProject] = useState<Project | undefined>(project);
    const [previousProject, setPreviousProject] = useState<Project | undefined>(undefined);
    const [nextProject, setNextProject] = useState<Project | undefined>(undefined);

    const foundProjectBySlug = useCallback((slug: string): Project | undefined => {
        return projects.find(project => project.slug === slug);
    }, [projects]);
    
    useEffect(() => {
        slug ? setCurrentProject(foundProjectBySlug(slug)) : undefined;
    }, [slug, foundProjectBySlug]);

    useEffect(() => {
        if (currentProject) {
            const currentProjectIndex = projects.findIndex(project => project.slug === currentProject.slug);
            setPreviousProject(currentProjectIndex > 0 ? projects[currentProjectIndex - 1] : undefined);
            setNextProject(currentProjectIndex < projects.length -1 ? projects[currentProjectIndex + 1] : undefined);
        }
    }, [currentProject, projects]);

    return (
        <section className="project-navigator">
            <div className="content">
                <div className="projectItems-container">
                    {previousProject &&
                        <div className="projectItem-container prev">
                            <p className="project-item">Projet précèdent</p>
                            <p className="project-title" onClick={() => router.push(`/project/${previousProject.slug}`)}>{previousProject.title}</p>
                        </div>
                    }
                    {nextProject &&
                        <div className="projectItem-container next">
                            <p className="project-item">Projet suivant</p>
                            <p className="project-title" onClick={() => router.push(`/project/${nextProject.slug}`)}>{nextProject.title}</p>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}
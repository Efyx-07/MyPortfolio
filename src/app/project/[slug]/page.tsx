"use client"

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Project from "@/app/types/projectType";
import useProjects from "@/app/services/useProjects";
import '../../../assets/sass/pages-common-style.scss';

export default function ProjectSlug() {

    const projects: Project[] = useProjects();
    const { slug } = useParams();
    const [selectedProject, setSelectedProject] = useState<Project | undefined>();

    useEffect(() => {
        if (projects.length > 0 && slug) {
            const foundProject = projects.find((project: Project) => project.slug === slug);
            setSelectedProject(foundProject);
        }
    }, [projects, slug])

    return (
        <>
            <div className="page">
                <div className="content">
                    {selectedProject ? 
                        (
                                <h1>{selectedProject.title}</h1>
                        )
                    :
                        (
                            <p>Loading...</p>
                        )
                    }
                </div>
            </div>
        </>
        
    )
}
"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { Project } from "@/app/types";
import ViewNavigator from "./ViewNavigator";
import './ProjectViewer.scss';

interface ProjectViewerProps {
    project: Project;
}

export default function ProjectViewer({project}: ProjectViewerProps) {

    const totalViews: number = project ? project.views.length : 0;
    let [currentViewIndex, setCurrentViewIndex] = useState<number>(0);

    const showNextView = (): void => {
        setCurrentViewIndex(prevIndex => 
            prevIndex < totalViews - 1 ? prevIndex + 1 : 0  
        );
    };

    const showPreviousView = (): void => {
        setCurrentViewIndex(prevIndex => 
            prevIndex > 0 ? prevIndex - 1 : totalViews - 1 
        );
    };

    useEffect(() => {
        setCurrentViewIndex(0)
    }, [project])

    return (
        <section className="projectViewer-section">
            <div className="content">
                <div className="project-viewer">
                    <div className="image-legend-container">
                        <div className="image-container">
                            <Image 
                                className="img"
                                src={`/images/projects/${project.views[currentViewIndex].source}`}
                                width={1000}
                                height={1000}
                                alt={project.image.alt}
                                priority
                            />
                        </div>
                        <div className="legend-container">
                            <p className="legend-title">{project.views[currentViewIndex].legend.title}</p>
                            <p className="legend-text">{project.views[currentViewIndex].legend.text}</p>
                        </div>
                    </div>
                    <ViewNavigator
                        showPreviousView={showPreviousView}
                        showNextView={showNextView}
                        currentViewIndex={currentViewIndex}
                        totalViews={totalViews}
                     />
                </div>
            </div>
        </section>
    )
}
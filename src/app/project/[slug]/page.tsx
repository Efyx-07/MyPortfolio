// SSR rendered page 

import { Metadata } from 'next';
import { Project } from '@/app/types';
import { fetchProjects } from '@/app/services';
import ProjectDescription from '@/app/components/ProjectPage/ProjectDescription';
import ProjectViewer from '@/app/components/ProjectPage/ProjectViewer';
import ProjectsNavigator from '@/app/components/ProjectPage/ProjectsNavigator';
import '../../../assets/sass/pages-common-style.scss';

interface ProjectPageProps {
  params: { slug: string };
};

async function fetchProjectBySlug(slug: string): Promise<Project | null> {
    const projects: Project[] = await fetchProjects();
    return projects.find((project: Project) => project.slug === slug) || null;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const project: Project | null = await fetchProjectBySlug(params.slug);
  return {
    title: `Project | ${project?.title}`,
    description: project?.description,
  };
};

export default async function ProjectPage({ params }: ProjectPageProps) {

  const project: Project | null = await fetchProjectBySlug(params.slug);
  const projects: Project[] = await fetchProjects();

  return (
    <>
        {project ? 
            (
                <div className="page">
                  <div className="content">
                      <ProjectDescription project={project} />
                      <ProjectViewer project={project} />
                      <ProjectsNavigator projects={projects} project={project}/>
                  </div>
                </div>
            ) : <p>Project not found</p>
        }
    </>
  );
};
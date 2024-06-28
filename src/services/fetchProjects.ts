import { Project } from '../app/types';
import { projectsData } from '../api';
import { unstable_noStore as noStore } from 'next/cache';

export default async function fetchProjects(): Promise<Project[]> {

    noStore(); // allow the data dynamic render for SSR page

    const projects: Project[] =  projectsData.projects;

    if (!projects) {
        throw new Error('Not the expected format');
    }

    return projects;
};
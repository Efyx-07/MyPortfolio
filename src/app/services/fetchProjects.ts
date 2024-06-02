import { Project } from '../types';
import projectsData from '../api/projects/projectsData.json';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchProjects(): Promise<Project[]> {

    noStore(); // allow the data dynamic render for SSR page
    const projects: Project[] =  projectsData.projects;
    /*
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/projects`, {
        headers: {
            Accept: "application/json",
            method: "GET"
        },
    });

    if (!response.ok) {
        throw new Error(`Error while fetching datas: ${response.status}`);
    }

    const data = await response.json();
    */
    if (!projects) {
        throw new Error('Not the expected format');
    }

    return projects;
};
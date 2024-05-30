import Project from '../types/projectType';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchProjects(): Promise<Project[]> {

    noStore(); // allow the data dynamic render for SSR page
    
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

    if (!data.projects) {
        throw new Error('Not the expected format');
    }

    return data.projects;
};
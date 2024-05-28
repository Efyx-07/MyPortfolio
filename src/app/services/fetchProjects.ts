import Project from '../types/projectType';

export async function fetchProjects(): Promise<Project[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/projects`, {
        headers: {
            Accept: "application/json",
            method: "GET",
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
}
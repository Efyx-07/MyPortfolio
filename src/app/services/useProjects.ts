import { useState, useEffect } from 'react';
import Project from '../types/projectType';

export default function useProjects() {
    const [projects, setProjects] = useState<Project[]>([]);

    const fetchDataFromApi = async () => {
        try {
            const response = await fetch('/api/projects', {
                headers: {
                    Accept: "application/json",
                    method: "GET",
                },
            });
            if (response.ok) {
                const data = await response.json();
                if (data.projects) {
                    setProjects(data.projects);
                } else {
                    console.error('Not the expected format', data);
                }
            } else {
                console.error('Error while fetching datas', response.status);
            }
        } catch (error) {
            console.error('Error while fetching datas', error);
        }
    };

    useEffect(() => {
        fetchDataFromApi();
    }, []);

    return projects;
}
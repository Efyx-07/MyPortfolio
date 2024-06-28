import { useState, useEffect } from 'react';
import { Project } from '@/types';
import { fetchProjects } from '@/services';

export default function useProjects() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projects = await fetchProjects();
                setProjects(projects);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return projects;
}

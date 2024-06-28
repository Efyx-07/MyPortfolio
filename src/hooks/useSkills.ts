import { useState, useEffect } from 'react';
import { Skill } from '@/types';
import { fetchSkills } from '@/services';

export default function useSkills() {
    const [skills, setSkills] = useState<Skill[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const skills = await fetchSkills();
                setSkills(skills);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return skills;
}
import { useState, useEffect } from 'react';
import { useContacts, useProjects, useSkills } from '@/hooks';
import { Contact, Project, Skill } from '@/types';

export default function useAppInit(): boolean {

    const [contactsLoaded, setContactsLoaded] = useState<boolean>(false);
    const [projectsLoaded, setProjectsLoaded] = useState<boolean>(false);
    const [skillsLoaded, setSkillsLoaded] = useState<boolean>(false);

    const contacts: Contact[] = useContacts();
    const projects: Project[] = useProjects();
    const skills: Skill[] = useSkills();

    useEffect(() => {
        if (contacts.length > 0) {
        setContactsLoaded(true);
        }
    }, [contacts]);

    useEffect(() => {
        if (projects.length > 0) {
        setProjectsLoaded(true);
        }
    }, [projects]);

    useEffect(() => {
        if (skills.length > 0) {
        setSkillsLoaded(true);
        }
    }, [skills]);

    const allDataLoaded: boolean = contactsLoaded && projectsLoaded && skillsLoaded;

    return allDataLoaded
}
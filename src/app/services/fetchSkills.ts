import { Skill } from "../types";
import { skillsData } from "../api";

export default async function fetchSkills(): Promise<Skill[]> {

    const skills: Skill[] = skillsData.skills;

    if (!skills) {
        throw new Error('Not the expected format');
    }

    return skills;
};
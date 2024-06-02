import { Skill } from "../types";
import skillsData from "../api/skills/skillsData.json";

export async function fetchSkills(): Promise<Skill[]> {

    const skills: Skill[] = skillsData.skills;
    /*
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/skills`, {
        headers: {
            Accept: "application/json",
            method: "GET",
        },
    });

    if (!response.ok) {
        throw new Error(`Error while fetching datas: ${response.status}`);
    }

    const data = await response.json(); */

    if (!skills) {
        throw new Error('Not the expected format');
    }

    return skills;
};
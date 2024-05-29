import { Skill } from "../types/skillType";

export async function fetchSkills(): Promise<Skill[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/skills`, {
        headers: {
            Accept: "application/json",
            method: "GET",
        },
    });

    if (!response.ok) {
        throw new Error(`Error while fetching datas: ${response.status}`);
    }

    const data = await response.json();

    if (!data.skills) {
        throw new Error('Not the expected format');
    }

    return data.skills;
};
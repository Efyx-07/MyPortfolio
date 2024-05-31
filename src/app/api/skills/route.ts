import { NextResponse } from "next/server";
import skillsData from "./skillsData.json";
import { Skill } from "@/app/types/skillType";

const skills: Skill[] = skillsData.skills;

export async function GET() {
    return NextResponse.json({
        skills
    });
};
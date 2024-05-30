import { NextResponse } from "next/server";
import projectsData from './projectsData.json';
import Project from "@/app/types/projectType";

const projects: Project[] = projectsData.projects;

export async function GET() {
    return NextResponse.json({
        projects   
    });
};
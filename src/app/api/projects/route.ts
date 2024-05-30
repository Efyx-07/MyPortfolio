import { NextResponse } from "next/server";
import projectsData from './projectsData.json';
import Project from "@/app/types/projectType";

const projects: Project[] = projectsData.projects;

export async function GET() {

    const isSSR = process.env.NEXT_PUBLIC_IS_SSR === 'true';

    if (isSSR) {
        return NextResponse.json({
            projects   
        },
        {
            headers: {
                'Cache-Control': 'no-store'
            },
        })       
    } else {
        return NextResponse.json({
            projects   
        },
        {
            headers: {
                'Cache-Control': 'public, max-age=3600'
            },
        })
    } 
}
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        contacts: [

            {
                "name": "Linkedin",
                "icon": "ph:linkedin-logo-light",
                "link": "https://fr.linkedin.com/in/fran%C3%A7ois-xavier-savary-ab9665210",
                "target": "_blank",
                "rel": "noopener noreferrer"
            },

            {
                "name": "Github",
                "icon": "mingcute:github-line",
                "link": "https://github.com/Efyx-07",
                "target": "_blank",
                "rel": "noopener noreferrer"
            },

            {
                "name": "Mail",
                "icon": "octicon:mail-24",
                "link": "mailto:fx.savary@orange.fr"
            }
        ]
    });
};
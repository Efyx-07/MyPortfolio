import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({

        skills: [
            
            { 
              "title": "Frontend",
              "icon": "gg:terminal",
              "stacks": [
                {
                  "name": "VueJs",
                  "icon": "carbon:logo-vue"
                },
                {
                  "name": "React",
                  "icon": "akar-icons:react-fill"
                },
                {
                  "name": "Typescript",
                  "icon": "akar-icons:typescript-fill"
                },
                {
                  "name": "Sass",
                  "icon": "fa6-brands:sass"
                }
              ],
              "text": "Je développe des applications dynamiques et réactives avec les frameworks VueJs et React en utilisant Typescript. Je design mes composants à l'aide de Sass."
        
            },
            { 
              "title": "Backend",
              "icon": "ph:database",
              "stacks": [
                {
                  "name": "NodeJs",
                  "icon": "fa6-brands:node-js"
                },
                {
                  "name": "ExpressJs",
                  "icon": "simple-icons:express"
                },
                {
                  "name": "MySQL",
                  "icon": "fontisto:mysql"
                }
              ],
              "text": "Je suis en mesure de concevoir une base de données MySQL et de mettre en place un backend robuste en NodeJs avec le framework Express."
        
            },
            { 
              "title": "Tools",
              "icon": "et:tools-2",
              "stacks": [
                {
                  "name": "Figma",
                  "icon": "solar:figma-broken"
                },
                {
                  "name": "Github",
                  "icon": "teenyicons:github-outline"
                },
                {
                  "name": "Vercel",
                  "icon": "akar-icons:vercel-fill"
                },
                {
                  "name": "Adobe",
                  "icon": "streamline:adobe-solid"
                }
              ],
              "text": "Je maîtrise les outils suivants: Figma, Git/Github, Vercel, suite Adobe (Photoshop/Premiere)."
        
            }
        
          ]
    })
}
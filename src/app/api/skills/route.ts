import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({

        skills: [
            { 
              "title": "Langage: TypeScript",
              "icon": "clarity:talk-bubbles-line",
              "stacks": [
                {
                  "name": "Typescript",
                  "icon": "akar-icons:typescript-fill"
                },
              ],
              "text": "J'utilise TypeScript pour assurer la cohérence des données tout au long du processus de développement et la maintenabilité du code."
            },
            
            { 
              "title": "Frontend: Vue.js ou React",
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
              ],
              "text": "Je développe des applications réactives à l'aide de Vue.js ou React et leurs meta-frameworks, Nuxt et Next."
            },

            { 
              "title": "UI Design: Sass, Figma, Adobe",
              "icon": "hugeicons:paint-board",
              "stacks": [
                {
                  "name": "Sass",
                  "icon": "fa6-brands:sass"
                },
                {
                  "name": "Figma",
                  "icon": "solar:figma-broken"
                },
                {
                  "name": "Adobe",
                  "icon": "streamline:adobe-solid"
                }
              ],
              "text": "J'utilise Sass pour un design soigné et responsive d'interfaces maquettées avec Figma. Je maîtrise aussi la suite Adobe creative."
            },

            { 
              "title": "Backend: NodeJs/Express",
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
              ],
              "text": "Capable de mettre en place un backend robuste et créer des API avec Node.js/Express, je peux intervenir sur des projets fullstack."
            },

            { 
              "title": "Database: MySQL",
              "icon": "ph:cloud",
              "stacks": [
                {
                  "name": "MySQL",
                  "icon": "fontisto:mysql"
                }
              ],
              "text": "Je suis en mesure de concevoir une base de données relationnelle avec MySQL."
            },

            { 
              "title": "Tools",
              "icon": "et:tools-2",
              "stacks": [
                {
                  "name": "Github",
                  "icon": "teenyicons:github-outline"
                },
                {
                  "name": "Vercel",
                  "icon": "akar-icons:vercel-fill"
                },
                {
                  "name": "Vitest",
                  "icon": "simple-icons:vitest"
                },
                {
                  "name": "Wordpress",
                  "icon": "ic:baseline-wordpress"
                }
              ],
              "text": "Je maîtrise les outils suivants: Git/Github pour le versionning, Vercel pour le déploiement, Vitest pour les tests unitaires et le CMS Wordpress."
            }
          ]
    })
}
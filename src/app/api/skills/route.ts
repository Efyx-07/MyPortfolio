import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({

        skills: [
            { 
              "title": "Langage",
              "icon": "clarity:talk-bubbles-line",
              "stacks": [
                {
                  "name": "Typescript",
                  "icon": "akar-icons:typescript-fill"
                },
              ],
              "text": "Typage des données avec TypeScript pour assurer leur cohérence et améliorer la maintenabilité du code tout au long du processus de développement."
            },
            
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
              ],
              "text": "Spécialisé en Vue.js avec une expérience quotidienne de plus d'un an, je maîtrise également React et développe des applications réactives avec ces frameworks et leurs meta-frameworks, Nuxt et Next."
            },

            { 
              "title": "UX / UI",
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
              "text": "Sass pour un design soigné et responsive des composants, maquettés à l'aide de Figma. Producteur audiovisuel pendant +5 ans, je maîtrise aussi la suite Adobe creative."
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
              ],
              "text": "Capable de mettre en place un backend robuste en Node.js avec Express et de créer des API, je peux intervenir sur des projets fullstack et faciliter le dialogue avec les autres développeurs."
            },

            { 
              "title": "Database",
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
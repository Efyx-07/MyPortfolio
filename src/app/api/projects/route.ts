import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({

        projects: [

            {
                "id": "1",
                "title": "VibrLink",
                "slug": "VibrLink_fanlink_generator",
                "date": "2024-05",
                "description": "Application de génération de fanlinks pour sorties musicales. Basée sur l'API spotify et réalisée en React.",
                "presentation": "VibrLink est une application de génération de fanlinks pour les sorties musicales. Basée sur l'API Spotify, elle permet de renseigner les liens de la sortie vers les autres plateformes (9 sont disponibles). La synchronisation des liens Deezer et YouTube est automatique (grâce à leurs Api respectives). Développée avec une base de données relationnelle en MySQL, un backend en Express, un frontend en React/Typescript et un design en Sass.",
                "image": {
                    "source": "VibrLink/pr3_imPres.png",
                    "alt": "VibrLink"
                },
                "devType": "fullstack",
                "stack": "REACT, TYPESCRIPT, SASS, NODEJS, MYSQL",
                "buttons": [
                    {
                        "name": "Demo",
                        "icon":"octicon:link-external-24",
                        "link":"https://vibrlink.vercel.app/"
                    },
                    {
                        "name": "Code",
                        "icon":"mingcute:github-line",
                        "link":"https://github.com/Efyx-07/VibrLink"
                    }
                ],
                "views": [
                    {
                        "id": "1",
                        "source": "VibrLink/pr3_view1.png",
                        "legend": "VibrLink - Fanlink generator"
                    },
                    {
                        "id": "2",
                        "source": "VibrLink/pr3_view2.png",
                        "legend": "Homepage, création de compte ou connexion sécurisée"
                    },
                    {
                        "id": "3",
                        "source": "VibrLink/pr3_view3.png",
                        "legend": "Création du fanlink basée sur l'Api Spotify. Fonctionne avec l'ID Spotify de votre sortie."
                    },
                    {
                        "id": "4",
                        "source": "VibrLink/pr3_view4.png",
                        "legend": "Liste des fanlinks de l'utilisateur connecté."
                    },
                    {
                        "id": "5",
                        "source": "VibrLink/pr3_view5.png",
                        "legend": "Edition des liens du fanlink. A partir de l'URL Spotify, auto-synchronisation des liens Deezer et YouTube(grâce à leurs Api respectives). Ajout manuel de liens vers d'autres plateformes. Visibilité des liens pilotée par un switch."
                    },
                    {
                        "id": "6",
                        "source": "VibrLink/pr3_view6.png",
                        "legend": "Landing page du fanlink créé."
                    }
                ]
            },
    
            {
                "id": "2",
                "title": "OxyEvents Manager",
                "slug": "OxyEvents_Manager",
                "date": "2023-10",
                "description": "Application de création et gestion d'évènements privés, développée sur mesure pour une agence de relations presse.",
                "presentation": "Dans le cadre d'une mission pour l'agence de relations presse Oxygen, j'ai créé cet outil interne en collaboration avec son pôle évenementiel. Réalisé de la maquette au développement final, celui-ci a été développé avec une base de données relationnelle en MySQL, un backend en NodeJs/Express et un frontend en Vue 3/Typescript avec design en Sass.",
                "image": {
                    "source": "EventsManager/pr1_imPres.png",
                    "alt": "EventsManager"
                },
                "devType": "fullstack",
                "stack": "VUE, TYPESCRIPT, SASS, NODEJS, MYSQL",
                "buttons": [
                    {
                        "name": "Demo",
                        "icon":"octicon:link-external-24",
                        "link":"https://oxy-events-manager.vercel.app/"
                    },
                    {
                        "name": "Code",
                        "icon":"mingcute:github-line",
                        "link":"https://github.com/Efyx-07/OxyEvents-Manager"
                    }
                ],
                "views": [
                    {
                        "id": "1",
                        "source": "EventsManager/pr1_view1.png",
                        "legend": "OxyEvents Manager"
                    },
                    {
                        "id": "2",
                        "source": "EventsManager/pr1_view2.png",
                        "legend": "Connexion sécurisée à votre dashboard avec identifiant et mot de passe."
                    },
                    {
                        "id": "3",
                        "source": "EventsManager/pr1_view3.png",
                        "legend": "Créez vos évènements via un formulaire dédié et selon un template pré-défini (carte-évènement, sections, lieu lié à l'API Google Maps)."
                    },
                    {
                        "id": "4",
                        "source": "EventsManager/pr1_view4.png",
                        "legend": "Retrouvez votre liste d'évènements, filtrable par date ou par mot-clé. Procédez aux différentes actions: mettre à jour ou supprimer un évènement, accéder à la page évènement, liste des participants."
                    },
                    {
                        "id": "5",
                        "source": "EventsManager/pr1_view5.png",
                        "legend": "Mettez à jour les informations de votre évènement via un formulaire dédié prérempli."
                    },
                    {
                        "id": "6",
                        "source": "EventsManager/pr1_view6.png",
                        "legend": "Affichez votre page évènement via une URL unique, et envoyez le lien à vos invités."
                    },
                    {
                        "id": "7",
                        "source": "EventsManager/pr1_view7.png",
                        "legend": "Vos invités confirment leur participation via un formulaire dédié."
                    },
                    {
                        "id": "8",
                        "source": "EventsManager/pr1_view8.png",
                        "legend": "Récupérez la liste de vos participants avec leurs informations dans votre dashboard et exportez la au format Excel."
                    },
                    {
                        "id": "9",
                        "source": "EventsManager/pr1_view9.png",
                        "legend": "Managez votre équipe en ajoutant, modifiant ou supprimant des administrateurs."
                    },
                    {
                        "id": "10",
                        "source": "EventsManager/pr1_view10.png",
                        "legend": "Application entièrement responsive, accessible sur tous les supports."
                    }
                ]
            },
    
            {
                "id": "3",
                "title": "AmpliFury MusicStore",
                "slug": "AmpliFury_music_store",
                "date": "2023-10",
                "description": "Site e-commerce spécialisé dans la vente d'instruments de musique, créatif et basé sur la réactivité de Vue3.",
                "presentation": "AmpliFury MusicStore est un site e-commerce spécialisé dans la vente d'instruments de musique, construit avec Vue3 et Sass pour le frontend, NodeJs/Express pour le backend et base de données en MySQL. Il offre une navigation simple d'utilisation et profite pleinement de la réactivité du framework Vue3.",
                "image": {
                    "source": "AmpliFury/pr2_imPres.png",
                    "alt": "AmpliFury"
                },
                "devType": "fullstack",
                "stack": "VUE, TYPESCRIPT, SASS, NODEJS, MYSQL",
                "buttons": [
                    {
                        "name": "Demo",
                        "icon":"octicon:link-external-24",
                        "link":"https://amplifury-music-store.vercel.app/"
                    },
                    {
                        "name": "Code",
                        "icon":"mingcute:github-line",
                        "link":"https://github.com/Efyx-07/AmpliFury-Music-Store"
                    }
                ],
                "views": [
                    {
                        "id": "1",
                        "source": "AmpliFury/pr2_view1.png",
                        "legend": "AmpliFury MusicStore"
                    },
                    {
                        "id": "2",
                        "source": "AmpliFury/pr2_view2.png",
                        "legend": "Explorez les produits selon les catégories."
                    },
                    {
                        "id": "3",
                        "source": "AmpliFury/pr2_view3.png",
                        "legend": "Catalogue de produits filtrable selon le prix (ascendants, descendants) et l'ordre alphabétique (ascendant, descendant)."
                    },
                    {
                        "id": "4",
                        "source": "AmpliFury/pr2_view4.png",
                        "legend": "Ajoutez les produits à votre liste de souhaits."
                    },
                    {
                        "id": "5",
                        "source": "AmpliFury/pr2_view5.png",
                        "legend": "Ajoutez les produits à votre panier d'achat."
                    },
                    {
                        "id": "6",
                        "source": "AmpliFury/pr2_view6.png",
                        "legend": "Consultez les détails de chaque produit individuellement."
                    }
                ]
            }
        ]
    })
}
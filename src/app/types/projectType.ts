export default interface Project {
    id: string;
    title: string;
    slug: string;
    date: string;
    description: string;
    presentation: string;
    image: {
        source: string;
        alt: string;
    }
    devType: string;
    stack: string;
    buttons: Button[];
    views: View[];
}

interface Button {
    name: string;
    icon: string;
    link: string;
}

interface View {
    id: string;
    source: string;
    legend: string;
}
export interface Skill {
    title: string;
    icon: string;
    stacks: Stack[];
    text: string;
}

interface Stack {
    name: string;
    icon: string;
}
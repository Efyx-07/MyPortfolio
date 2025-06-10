export default interface Project {
  id: string;
  title: string;
  slug: string;
  year: string;
  date: string;
  description: string;
  image: {
    source: string;
    alt: string;
  };
  devType: string;
  stacks: Stack[];
  buttons: Button[];
}

interface Stack {
  name: string;
}

interface Button {
  name: string;
  icon: string;
  link: string;
}

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
  };
  devType: string;
  stacks: Stack[];
  themes: Theme[];
  buttons: Button[];
  views: View[];
}

interface Stack {
  name: string;
}

interface Theme {
  name: string;
}

interface Button {
  name: string;
  icon: string;
  link: string;
}

interface View {
  id: string;
  source: string;
  legend: Legend;
}

interface Legend {
  title: string;
  text: string;
}

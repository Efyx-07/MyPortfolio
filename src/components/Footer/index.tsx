import './Footer.scss';

export default function Footer() {
  const date: Date = new Date();
  const year: number = date.getFullYear();

  return (
    <footer>
      <p>© {year} | développement et design par FX</p>
    </footer>
  );
}

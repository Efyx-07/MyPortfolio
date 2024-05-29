import './Footer.scss';

export default function Footer() {

    const date: Date = new Date();
    const year: number = date.getFullYear();

    return (
        <footer>
            <p>© {year} | développé par FX en Next.js </p>
        </footer>
    )
}
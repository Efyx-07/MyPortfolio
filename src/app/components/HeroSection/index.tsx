import HeroCard from "./HeroCard";
import '../../../assets/sass/sections-common-style.scss';
import './HeroSection.scss';

export default function HeroSection() {
    return (
        <section className="hero-section">
            <div className="content">
                <HeroCard />
            </div>
        </section>
    )
}
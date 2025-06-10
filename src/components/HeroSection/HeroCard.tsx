import HeroImage from './HeroImage';
import HeroText from './HeroText';
import './HeroCard.scss';

export default function HeroCard() {
  return (
    <div className="hero-card">
      <HeroImage />
      <HeroText />
    </div>
  );
}

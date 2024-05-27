import { Icon } from '@iconify/react';
import './HeroText.scss';

export default function HeroText() {
    return (
        <div className="hero-text">
            <div className="text-container">
                <div className="textIcon-container hello">
                    <Icon icon="solar:hand-shake-outline" className="icon"/>
                    <p>Hello ! Je suis FX</p>
                </div>
                <h1>Développeur <span>Frontend</span></h1>
                <div className="textIcon-container">
                    <Icon icon="ic:baseline-place" className="icon"/>
                    <p>Lille, France</p>
                </div>
            </div>
            <div className="buttons-container">
                <button>Hello</button>
                <button>Goodbye</button>
            </div>
        </div>
    )
}
import Image from "next/image";
import './HeroImage.scss';

export default function HeroImage() {
    return (
        <div className="hero-image">
            <div className="image-container">
                <Image 
                    className="img"
                    src='/images/decoration/fxsavarydev.jpg'
                    width={500}
                    height={500}
                    alt="fxsavary.com" 
                    priority
                />
            </div>
        </div>
    )
}
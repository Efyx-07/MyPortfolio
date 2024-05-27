import Image from "next/image";
import './HeroImage.scss';

export default function HeroImage() {
    return (
        <div className="hero-image">
            <div className="image-container">
                <Image 
                className="img"
                    src='/images/decoration/fxsavarydev.jpg' 
                    layout="responsive"
                    width={500}
                    height={500}
                    objectFit="cover"
                    alt="fxsavary.com" 
                />
            </div>
        </div>
    )
}
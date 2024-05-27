import Image from "next/image"

export default function HeroImage() {
    return (
        <div className="hero-image">
            <div className="image-container">
                <Image src='/images/decoration/fxsavarydev.jpg' width={400} height={400} alt="fxsavary.com" />
            </div>
        </div>
    )
}
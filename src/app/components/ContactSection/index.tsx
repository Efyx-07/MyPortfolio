import SectionTitle from "../Reusables/SectionTitle";
import '../../../assets/sass/sections-common-style.scss';

export default function ContactSection() {

    return (
        <section className="contact-section">
            <div className="content">
                <SectionTitle title="Contact" />
                <h2>Envie de travailler avec moi?</h2>
                <p>N'hésitez pas à me contacter par mail ou via les réseaux sociaux.</p>
            </div>
        </section>
    )
}
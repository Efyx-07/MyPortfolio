//import SectionTitle from "../Reusables/SectionTitle";
import { useContacts } from '@/app/hooks';
import Contact from '@/app/types/contactType';
import Button from '../Reusables/Button';
import '../../../assets/sass/sections-common-style.scss';
import './ContactSection.scss';

export default function ContactSection() {

    const contacts: Contact[] = useContacts();

    return (
        <section className="contact-section">
            <div className="contact-content">
                <div className="contact-block">
                    <div className="contact-text">
                        <h2>Envie de travailler avec moi ?</h2>
                        <p>N&apos;hésitez pas à me contacter par mail ou via mes réseaux sociaux.</p>
                    </div>
                    <div className="buttons-container">
                        {contacts.map(contact => (
                            <Button 
                                key={contact.name}
                                name={contact.name}
                                icon={contact.icon}
                                link={contact.link}
                                target={contact.target}
                                rel={contact.rel}
                                className='contact-button'
                            />  
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
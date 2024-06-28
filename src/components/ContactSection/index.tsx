import { motion } from "framer-motion";
import { useContacts } from '@/hooks';
import { Contact } from '@/types';
import Button from '../Reusables/Button';
import '../../assets/sass/sections-common-style.scss';
import './ContactSection.scss';

export default function ContactSection() {

    const contacts: Contact[] = useContacts();

    return (
        <motion.section 
            initial={{opacity: 0, y: 100}}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, ease: "easeOut" }}
            className="contact-section"
        >
            <div className="content contact-content">
                <div className="contact-text">
                    <h1>Envie de travailler <span>avec moi ?</span></h1>
                    <p>N&apos;hésitez pas à me contacter par mail ou via mes réseaux sociaux.</p>
                </div>
                <div className="contact-buttons-container">
                    {contacts.map((contact, index) => (
                        <Button 
                            key={contact.name}
                            name={contact.name}
                            icon={contact.icon}
                            link={contact.link}
                            target={contact.target}
                            rel={contact.rel}
                            className={index === 2 ? 'button cta-button' : 'button'}
                        />  
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
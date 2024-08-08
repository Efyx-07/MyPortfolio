import { Icon } from '@iconify/react';
import { Contact } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { fetchContacts } from '@/services';
import { motion } from "framer-motion";
import Button from '../Reusables/Button';
import Separator from '../Reusables/Separator';
import './HeroText.scss';

export default function HeroText() {

    const { data: contacts = [] } = useQuery<Contact[]>({
        queryKey: ['contacts'],
        queryFn: fetchContacts
    });

    return (
        <motion.div 
            initial={{y: 30, opacity: 0}} 
            animate={{y: 0, opacity: 1}} 
            transition={{ duration: .5, ease: "easeOut" }} 
            className="hero-text">
            <div className="text-container">
                <div className="textIcon-container hello">
                    <Icon icon="solar:hand-shake-outline" className="icon"/>
                    <p>Hello ! Je suis FX</p>
                </div>
                <motion.h1
                    initial={{y: 30, opacity: 0}} 
                    animate={{y: 0, opacity: 1}} 
                    transition={{ duration: .25, ease: "easeOut" }} 
                >
                    Développeur <span>Frontend</span>
                </motion.h1>
                <Separator />
                <motion.div 
                    initial={{x: 50, opacity: 0}} 
                    animate={{x: 0, opacity: 1}} 
                    transition={{ duration: .25, ease: "easeOut" }} 
                    className="presentation"
                >
                    <p className='presentation-text'>Passionné par l’UI et l’expérience utilisateur, je développe des applications et sites web réactifs au design soigné.</p>
                </motion.div>
                <Separator />
            </div>
            <div className="buttons-container">
                {contacts.map((contact, index) => (
                    index !== 1 && 
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
        </motion.div>
    )
}
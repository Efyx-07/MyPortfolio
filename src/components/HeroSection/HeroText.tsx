import { Icon } from '@iconify/react';
import { useContacts } from '@/hooks';
import { Contact } from '@/types';
import Button from '../Reusables/Button';
import Separator from '../Reusables/Separator';
import './HeroText.scss';

export default function HeroText() {

    const contacts: Contact[] = useContacts();

    return (
        <div className="hero-text">
            <div className="text-container">
                <div className="textIcon-container hello">
                    <Icon icon="solar:hand-shake-outline" className="icon"/>
                    <p>Hello ! Je suis FX</p>
                </div>
                <h1>Développeur <span>Frontend</span></h1>
                <Separator />
                <div className="presentation">
                    <p className='presentation-text'>Passionné par l’UI et l’expérience utilisateur, je développe des applications et sites web réactifs au design soigné.</p>
                </div>
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
        </div>
    )
}
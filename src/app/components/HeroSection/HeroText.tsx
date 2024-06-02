import { Icon } from '@iconify/react';
import useContacts from '@/app/hooks/useContacts';
import { Contact } from '@/app/types';
import Button from '../Reusables/Button';
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
                <div className="textIcon-container">
                    <Icon icon="ic:baseline-place" className="icon"/>
                    <p>Lille, France</p>
                </div>
            </div>
            <div className="buttons-container">
                {contacts.map((contact, index) => (
                    index < 2 && 
                        <Button 
                            key={contact.name}
                            name={contact.name}
                            icon={contact.icon}
                            link={contact.link}
                            target={contact.target}
                            rel={contact.rel}
                            className='button'
                        />  
                ))}
            </div>
        </div>
    )
}
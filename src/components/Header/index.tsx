"use client"

import { useState, useEffect } from 'react';
import { Contact } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { fetchContacts } from '@/services';
import { motion } from "framer-motion";
import Button from '../Reusables/Button';
import SiteName from './SiteName';
import './Header.scss';

export default function Header() {

    const { data: contacts = [] } = useQuery<Contact[]>({
        queryKey: ['contacts'],
        queryFn: fetchContacts
    });
    
    const [ scrolled, setScrolled ] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (): void => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.header 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ duration: .5, ease: "easeOut" }} 
            className={scrolled ? 'scrolled' : ''}
        >
            <div className="content">
                <SiteName />
                <div className="button-container">
                    {contacts.map((contact, index) => (
                        index === 2 && 
                        <Button 
                            key={contact.name}
                            name={contact.name}
                            icon={contact.icon}
                            link={contact.link}
                            target=""
                            rel=""
                            className='button'
                        /> 
                    ))}
                </div>
            </div>
        </motion.header>
    )
}
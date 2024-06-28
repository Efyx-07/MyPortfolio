import { useState, useEffect } from 'react';
import { Contact } from '@/types';
import { fetchContacts } from '@/services';

export default function useContacts() {
    const [contacts, setContacts] = useState<Contact[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const contacts = await fetchContacts();
                setContacts(contacts);
            } catch (error) {
                console.error(error);
            }
        };
        
        fetchData();
    }, []);

    return contacts;
};
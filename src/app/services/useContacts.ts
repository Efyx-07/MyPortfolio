import { useState, useEffect } from 'react';
import Contact from '../types/contactType';

export default function useContacts() {
    const [contacts, setContacts] = useState<Contact[]>([]);

    const fetchDataFromApi = async () => {
        try {
            const response = await fetch('/api/contacts', {
                headers: {
                    Accept: "application/json",
                    method: "GET",
                },
            });
            if (response.ok) {
                const data = await response.json();
                if (data.contacts) {
                    setContacts(data.contacts);
                } else {
                    console.error('Not the expected format', data);
                }
            } else {
                console.error('Error while fetching datas', response.status);
            }
        } catch (error) {
            console.error('Error while fetching datas', error);
        }
    };

    useEffect(() => {
        fetchDataFromApi();
    }, []);

    return contacts;
}

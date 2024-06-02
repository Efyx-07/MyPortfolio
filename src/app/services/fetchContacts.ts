import Contact from '../types/contactType';
import contactsData from '../api/contacts/contactsData.json';

export async function fetchContacts(): Promise<Contact[]> {

    const contacts: Contact[] = contactsData.contacts;
    /*
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/contacts`, {
        headers: {
            Accept: "application/json",
            method: "GET",
        },
    });

    if (!response.ok) {
        throw new Error(`Error while fetching datas: ${response.status}`);
    }

    const data = await response.json(); */

    if (!contacts) {
        throw new Error('Not the expected format');
    }

    return contacts;
}
import { Contact } from '../types';
import { contactsData } from '../api';

export default async function fetchContacts(): Promise<Contact[]> {

    const contacts: Contact[] = contactsData.contacts;

    if (!contacts) {
        throw new Error('Not the expected format');
    }

    return contacts;
}
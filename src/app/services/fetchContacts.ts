import Contact from '../types/contactType';

export async function fetchContacts(): Promise<Contact[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/contacts`, {
        headers: {
            Accept: "application/json",
            method: "GET",
        },
    });

    if (!response.ok) {
        throw new Error(`Error while fetching datas: ${response.status}`);
    }

    const data = await response.json();

    if (!data.contacts) {
        throw new Error('Not the expected format');
    }

    return data.contacts;
}
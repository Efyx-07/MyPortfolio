import { NextResponse } from "next/server";
import contactsData from './contactsData.json';
import Contact from "@/app/types/contactType";

const contacts: Contact[] = contactsData.contacts

export async function GET() {
    return NextResponse.json({
        contacts
    });
};
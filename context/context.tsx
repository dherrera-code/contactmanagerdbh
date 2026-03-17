"use client"
import { ContactInfo, ContactInfoContextType } from "@/interfaces/interface";
import { createContext, ReactNode, useContext, useState } from "react";

const ContactContext = createContext<ContactInfoContextType | undefined>(undefined);

export function ContactProvider({children} : {children: ReactNode}){
    const [contact, setContact] = useState<ContactInfo | null>(null);

    return (
        <ContactContext.Provider value={{ contact, setContact}}>
            {children}
        </ContactContext.Provider>
    )
}

export function useContacts() {
    const context = useContext(ContactContext);
    
    if(context=== undefined){
        throw new Error("Oops!");
    }
    return context;
}


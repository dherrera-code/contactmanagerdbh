"use client"
import { ContactInfo, ContactInfoContextType, ContactModel, UpdateBooleanContextType, UpdateContactContextType } from "@/interfaces/interface";
import { createContext, ReactNode, useContext, useState } from "react";

const ContactContext = createContext<ContactInfoContextType | undefined>(undefined);

const IsUpdateContext = createContext<UpdateBooleanContextType | undefined>(undefined);

const UpdateContactContext = createContext<UpdateContactContextType | undefined>(undefined);

export function ContactProvider({ children }: { children: ReactNode }) {
    const [contact, setContact] = useState<ContactModel | null>(null);
    const [isUpdate, setIsUpdate] = useState<boolean | null>(null)
    const [updateContact, setUpdateContact] = useState<ContactModel | null>(null)

    return (
            <ContactContext.Provider value={{ contact, setContact }}>
        <UpdateContactContext.Provider value={{ updateContact, setUpdateContact }}>
        <IsUpdateContext.Provider value={{ isUpdate, setIsUpdate }}>
                {children}
        </IsUpdateContext.Provider>
        </UpdateContactContext.Provider>
            </ContactContext.Provider>
    )
}

export function useContacts() {
    const context = useContext(ContactContext);
    // const searchContacts = useContext(ContactContext)

    if (context === undefined) {
        throw new Error("Oops!");
    }
    return context;
}

export function useIsUpdateBool() {
    const context = useContext(IsUpdateContext);
    if (context === undefined) {
        throw new Error("Oops!");
    }
    return context;
}

export function useUpdateContact() {
    const context = useContext(UpdateContactContext);
    if (context === undefined) {
        throw new Error("Oops!");
    }
    return context;
}


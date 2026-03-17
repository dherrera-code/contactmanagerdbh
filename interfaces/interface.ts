export interface ContactInfo {
    Name: string,
    Email: string,
    Phone: string
}

// this will be our interface for our wrapper provider!
export interface ContactInfoContextType {
    contact: ContactInfo | null;
    setContact : (contact : ContactInfo | null) => void 
}
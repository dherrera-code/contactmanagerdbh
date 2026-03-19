export interface ContactInfo {
    name: string,
    email: string,
    phoneNumber: string
}

// this will be our interface for our wrapper provider!
export interface ContactInfoContextType {
    contact: ContactInfo | null;
    setContact : (contact : ContactInfo | null) => void 
}
export interface Token {
    token: string
}

export interface CreateUser {
    username: string,
    email: string,
    password: string
}

export interface Login {
    loginParam: string,
    password: string
}
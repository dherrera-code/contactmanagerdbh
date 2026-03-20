export interface ContactInfo {
    name: string,
    email: string,
    phoneNumber: string
}
export interface ContactModel {
    id: number,
    name: string,
    email: string,
    phoneNumber: string
}

// this will be our interface for our wrapper provider!
export interface ContactInfoContextType {
    contact: ContactModel | null;
    setContact : (contact : ContactModel | null) => void 
}

export interface UpdateContactContextType {
    updateContact: ContactModel | null;
    setUpdateContact : (contact : ContactModel | null) => void 
}

export interface UpdateBooleanContextType {
    isUpdate: boolean | null;
    setIsUpdate: (isUpdate: boolean | null) => void
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
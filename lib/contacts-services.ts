import { ContactInfo } from "@/interfaces/interface";


const url = "https://contactmanagerdbhapi-cnfhhvf7e7fse7gt.westus3-01.azurewebsites.net/Contact/";

export const getContacts = async (token: string) => {
    const response = await fetch(url + "GetAllContacts", {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + token
        }
    });

    if(!response.ok){
        const data = await response.json();
        const message = data.message;
        console.log(message);
        return [];
    }
    const data: ContactInfo[] = await response.json();
    return data;
}

export const getContactByName = async (name: string ,token: string) => {
    const response = await fetch(url + `GetContact/${name}`,{
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + token
        }
    });

    if(!response.ok) {
        const data = await response.json()
        const message = data.message;
        console.log(message);
        return [];
    }

    const data = await response.json();
    return data;

}

export const createContactItem = async (contact: ContactInfo, token: string) => {
    const response = await fetch(url + "CreateContact", {
        method: "POST",
        headers: {
            "Content-Type" : " application/json",
            "Authorization" : "Bearer " + token
        },
        body: JSON.stringify(contact) //turn object to json!
    });

    if(!response.ok){
        const data = await response.json();
        const message = data.message;

        console.log(message);
        return false;
    }
    const data = await response.json();
    return data;
}

export const removeContactItem = async (contact: ContactInfo, token: string) => {
    const response = await fetch(url + `DeleteContact`, {
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + token
        },
        body: JSON.stringify(contact)
    })

    if(!response.json())
    {
        const data = await response.json();
        const message = data.message;
        console.log(message);
        return false;
    }
    console.log(response)
    // const data = await response.ok
    return response.ok;

}
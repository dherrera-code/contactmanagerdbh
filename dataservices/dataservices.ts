import { ContactInfo } from "@/interfaces/interface";

const apiUrl = "https://contactmanagerdbhapi-cnfhhvf7e7fse7gt.westus3-01.azurewebsites.net/contact"

export const getAllContacts = async () => {
    const response = await fetch(apiUrl + "/getAllContacts");
    const data = await response.json();
    return data;
}
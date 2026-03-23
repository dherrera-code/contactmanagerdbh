import { CreateUser, Login, Token } from "@/interfaces/interface";

const url = "https://contactmanagerdbhapi-cnfhhvf7e7fse7gt.westus3-01.azurewebsites.net/User/";

export const createAccount = async (user: CreateUser) => {
    const response = await fetch(url + "CreateAccount", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    if(!response.ok){
        const data = await response.json();
        const message = data.message;
        console.log(message)
        return data.success;
    }

    const data = await response.json();
    return data.success;
}

export const login = async (user: Login) => {
    const response = await fetch(url + "login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(user)
    });
    console.log(response);
    if(!response.ok){
        // const data = await response.json();
        // console.log(await data)
        // const message = data.message;
        return null;
    }

    const data: Token = await response.json();
    return data;
}

export const checkToken = () => {
    const token = localStorage.getItem("token");
    return !!token;
}
export const getToken = () => {
    //localStorage.getItem('token') ?? ""; //* if token is null, it will return an empty string!
    let token = localStorage.getItem("token")
    if(token === null)
    {
        token = sessionStorage.getItem("token")
    }
    return token ?? "";
}
export const loggedInData = () => JSON.parse(localStorage.getItem('user')!);
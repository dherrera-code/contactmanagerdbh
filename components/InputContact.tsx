'use client'
import { useIsUpdateBool, useUpdateContact } from '@/context/context'
import { ContactInfo, ContactModel } from '@/interfaces/interface'
import { createContactItem, updateContactItem } from '@/lib/contacts-services'
import { getToken } from '@/lib/user-services'
import { Button, Card, Label, TextInput } from 'flowbite-react'
import React, { useEffect, useState } from 'react'

const InputContact = () => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const {isUpdate} = useIsUpdateBool();
    const {updateContact} = useUpdateContact();


    const handleSubmit = async (event:React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const contact: ContactInfo = {
            name,
            email,
            phoneNumber,
        }
        let result = false;
        if(!isUpdate)
        {

            result = await createContactItem(contact, getToken())
            if(!result) {
                alert("contact not added")
            }
        }
        else{
            const updateContactInfo: ContactModel = {
                name : name,
                email : email,
                phoneNumber : phoneNumber,
                id : updateContact!.id
            }
            result = await updateContactItem(updateContactInfo, getToken())
            if(!result) {
                alert("unable to update!")
            }
        }      
    }
    useEffect(() => {
        if(isUpdate){
            setName(updateContact!.name)
            setEmail(updateContact!.email)
            setPhoneNumber(updateContact!.phoneNumber)
        }
    }, [isUpdate])
        
    return (
        <Card className='max-w-md dark:bg-neutral-primary-soft'>

            <h1 className='font-bold text-xl'>{isUpdate ? "Update Contact" : "Add New Contact"}</h1>

            <form onSubmit={(event: React.SubmitEvent<HTMLFormElement>) => handleSubmit(event)} className="flex max-w-sm flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor='name'>Name</Label>
                    </div>
                    <TextInput value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} id="name" type="text" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor='email1'>Email</Label>
                    </div>
                    <TextInput value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} id="email1" type="email" placeholder="john.doe@example.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor='phone'>Phone</Label>
                    </div>
                    <TextInput value={phoneNumber} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)} id="phone" type="tel" placeholder='Format: 123 473-2345' pattern='[0-9]{3} [0-9]{3}-[0-9]{4}' required />
                </div>
                
                <Button type="submit">{isUpdate ? "+ Update Contact" : "+   Add Contact"}</Button>
            </form>
        </Card>
    )
}

export default InputContact
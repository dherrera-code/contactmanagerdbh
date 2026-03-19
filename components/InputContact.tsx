'use client'
import { ContactInfo } from '@/interfaces/interface'
import { createContactItem } from '@/lib/contacts-services'
import { getToken } from '@/lib/user-services'
import { Button, Card, Label, TextInput } from 'flowbite-react'
import React, { useState } from 'react'

const InputContact = () => {
    // console.log("Input component rendering!")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    


    const handleCreateContact = async () => {
        const contact: ContactInfo = {
            name,
            email,
            phoneNumber
        }
        let result = false;
        result = await createContactItem(contact, getToken())
        if(!result) {
            alert("contact not added")
        }

    }
        
    return (
        <Card className='max-w-md dark:bg-neutral-primary-soft'>

            <h1 className='font-bold text-xl'>Add New Contact</h1>

            <form className="flex max-w-sm flex-col gap-4">
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
                
                <Button onClick={handleCreateContact} type="submit">+   Add Contact</Button>
            </form>
        </Card>
    )
}

export default InputContact
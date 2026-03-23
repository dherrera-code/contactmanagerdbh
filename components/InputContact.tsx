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
    const { isUpdate } = useIsUpdateBool();
    const { updateContact } = useUpdateContact();


    const handleSubmit = async () => {
        const contact: ContactInfo = {
            name,
            email,
            phoneNumber,
        }
        let result = false;
        if (!isUpdate) {

            result = await createContactItem(contact, getToken())
            if (!result) {
                alert("contact not added")
            }
        }
        else {
            const updateContactInfo: ContactModel = {
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                id: updateContact!.id
            }
            result = await updateContactItem(updateContactInfo, getToken())
            if (!result) {
                alert("unable to update!")
            }
        }
    }
    useEffect(() => {
        if (isUpdate) {
            setName(updateContact!.name)
            setEmail(updateContact!.email)
            setPhoneNumber(updateContact!.phoneNumber)
        }
    }, [isUpdate])

    return (
        <Card className='max-w-md dark:bg-neutral-primary-soft'>

            <h1 className='font-bold text-xl'>{isUpdate ? "Update Contact" : "Add New Contact"}</h1>

            <form onSubmit={(handleSubmit)} className="flex max-w-sm flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor='name'>Name</Label>
                    </div>
                    <div className='relative'>
                        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                            <img className='w-4 h-4' src="/assets/user-icon.svg" alt="Person Icon" />
                        </div>
                        <input className='block w-96 h-10 p-4 ps-9 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500' value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} id="name" type="text" placeholder='Jon Doe' required />
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor='email1'>Email</Label>
                    </div>
                    {/* <TextInput value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} id="email1" type="email" placeholder="john.doe@example.com" required /> */}
                    <div className='relative'>
                        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                            <img className='w-4 h-4' src="/assets/mail-icon.svg" alt="Person Icon" />
                        </div>
                        <input className='block w-96 h-10 p-4 ps-9 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500' value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} id="email1" type="email" placeholder="john.doe@example.com" required />
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor='phone'>Phone</Label>
                        <div className='relative'>
                            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                                <img className='w-4 h-4' src="/assets/phone-icon.png" alt="Person Icon" />
                            </div>
                            <input className='block w-96 h-10 p-4 ps-9 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500' value={phoneNumber} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)} id="phone" type="tel" placeholder='Format: 123 473-2345' pattern='[0-9]{3} [0-9]{3}-[0-9]{4}' required />
                        </div>
                    </div>
                    {/* <TextInput value={phoneNumber} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)} id="phone" type="tel" placeholder='Format: 123 473-2345' pattern='[0-9]{3} [0-9]{3}-[0-9]{4}' required /> */}

                </div>

                <Button type="submit">{isUpdate ? "+ Update Contact" : "+   Add Contact"}</Button>
            </form>
        </Card>
    )
}

export default InputContact
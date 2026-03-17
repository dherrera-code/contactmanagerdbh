'use client'
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react'
import React from 'react'

const InputContact = () => {
    return (
        <Card className='max-w-md'>

            <h1 className='font-bold text-xl'>Add New Contact</h1>

            <form className="flex max-w-sm flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label>Name</Label>
                    </div>
                    <TextInput id="name" type="text" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label>Email</Label>
                    </div>
                    <TextInput id="email1" type="email" placeholder="john.doe@example.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label >Phone</Label>
                    </div>
                    <TextInput id="password1" type="phone number" required />
                </div>
                
                <Button type="submit">+   Add Contact</Button>
            </form>

        </Card>
    )
}

export default InputContact
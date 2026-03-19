"use client"
import { useContacts } from '@/context/context'
import { ContactInfo } from '@/interfaces/interface'
import { getContactByName } from '@/lib/contacts-services'
import { getToken } from '@/lib/user-services'
import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, } from 'flowbite-react'
import { KeyboardEvent, useState } from 'react'

const TopNavbar = () => {

    const [name, setName] = useState("")
    const { contact, setContact } = useContacts()

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter"){
            event.preventDefault();
            console.log("Enter key is pressed!" + " " + contact)
            handleSearch()
        }
    }

    const handleSearch = async () => {
        const contactFound: ContactInfo = await getContactByName(name, getToken())
        
        console.log(name + " : " + contactFound);
        if(contactFound != null) setContact(contactFound);
        else {
            setContact(null);

        }
        console.log(contactFound)
        console.log(contactFound.name)

    }
    return (
        <Navbar fluid className='dark:bg-white bg-white border-b-mist-200 border-b-2'>
            <NavbarBrand className='ps-2' >
                <img src="/assets/ContactFlow-logo.png" className="mr-3 h-9 sm:h-11" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-black text-black">Contact Manager</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                {/* <TextInput className='' size={33} placeholder='Search contacts...'></TextInput> */}
                <div className="max-w-md mx-auto">
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"> 
                            <img src="/assets/Search-icon.png" className='w-4.5 h-4.5 text-gray-500' alt="Search Icon!" />
                        </div>
                        <input onKeyDown={(event) => handleKeyDown(event)} value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} className="block w-80 h-10 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search contacts..." required />
                    </div>
                </div>
            </NavbarCollapse>

        </Navbar>
    )
}

export default TopNavbar
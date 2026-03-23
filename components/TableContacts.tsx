'use client'
import { useContacts, useIsUpdateBool, useUpdateContact } from '@/context/context'
import { ContactInfo, ContactModel } from '@/interfaces/interface'
import { getContacts, removeContactItem } from '@/lib/contacts-services'
import { getToken } from '@/lib/user-services'
import { Card, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'

const TableContacts = () => {

    useEffect(() => {
        if(localStorage.getItem("token") == null){
        if(sessionStorage.getItem("token") == null){
            redirect("/")
        }
    }
    } , [])

    const [contactItems, setContactItems] = useState<ContactModel[]>([]);
    const {contact , setContact} = useContacts();
    const {setIsUpdate} = useIsUpdateBool();
    const {setUpdateContact} = useUpdateContact();

    const handleUpdate = (contactToUpdate: ContactModel) => {
        setIsUpdate(true);
        setUpdateContact(contactToUpdate);
    }

    const handleDelete = async (contactToDelete : ContactInfo) => {
        if(contactToDelete.name == contact?.name){
            setContact(null);
        }
        const isDelete = await removeContactItem(contactToDelete, getToken());
        if(!isDelete) console.log("Contact unable to be deleted!")
        else console.log("Contact was removed!")

        getAllContacts(); // reloads getAllcontacts when one is deleted!
    }

    const getAllContacts = async () => {
        const data: ContactModel[] = await getContacts(getToken());
        setContactItems(data);
    }

    useEffect(() => {
        getAllContacts(); // gets all contacts when user loads to dashboard page!
    }, [])

    return (
        <div>
            <Card className='border-mist-300 border-b-2 rounded-b-none'>
                <h1 className='text-xl font-semibold '>All Contacts</h1>
            </Card>

            <Card className='rounded-none'>
                <div className="overflow-x-auto">
                    <Table hoverable>
                        <TableHead>
                            <TableRow>
                                <TableHeadCell>Name</TableHeadCell>
                                <TableHeadCell>Email</TableHeadCell>
                                <TableHeadCell>Phone</TableHeadCell>
                                <TableHeadCell>Actions</TableHeadCell>
                            </TableRow>
                        </TableHead>
                        {
                            <TableBody className="divide-y">
                                {
                                    contactItems.map((item) => (
                                            <TableRow key={item.id} className='bg-white'>
                                                <TableCell className='whitespace-nowrap font-medium text-gray-900'>
                                                    {item.name}
                                                </TableCell>
                                                <TableCell>{item.email}</TableCell>
                                                <TableCell>{item.phoneNumber}</TableCell>
                                                <TableCell>
                                                    <div className='flex place-items-center gap-2'>
                                                        <span onClick={() => handleUpdate(item)} className='edit-icon hover:cursor-pointer'><svg className='' width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.5 2.76777H2.66667C2.22464 2.76777 1.80072 2.94336 1.48816 3.25592C1.17559 3.56848 1 3.99241 1 4.43443V16.1011C1 16.5431 1.17559 16.9671 1.48816 17.2796C1.80072 17.5922 2.22464 17.7678 2.66667 17.7678H14.3333C14.7754 17.7678 15.1993 17.5922 15.5118 17.2796C15.8244 16.9671 16 16.5431 16 16.1011V10.2678M14.75 1.51777C15.0815 1.18625 15.5312 1 16 1C16.4688 1 16.9185 1.18625 17.25 1.51777C17.5815 1.84929 17.7678 2.29893 17.7678 2.76777C17.7678 3.23661 17.5815 3.68625 17.25 4.01777L9.33333 11.9344L6 12.7678L6.83333 9.43443L14.75 1.51777Z" stroke="#3B82F6" strokeWidth={2} /></svg></span>

                                                        <div onClick={() => handleDelete(item)} className='bg-red-600 hover:bg-red-800 w-6 h-6 rounded-sm hover:cursor-pointer'></div>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                    ))
                                }
                            </TableBody>
                        }
                    </Table>
                </div>
            </Card>

            <Card className='rounded-t-none'>
                <div>
                    <Table>
                        {/* Map out search result here */}
                        <TableBody className='divide-y'>
                            {
                                (contact != null ) ? (
                                    <TableRow className='bg-white'>
                                                <TableCell className='whitespace-nowrap font-medium text-gray-900'>
                                                    {contact.name}
                                                </TableCell>
                                                <TableCell>{contact.email}</TableCell>
                                                <TableCell>{contact.phoneNumber}</TableCell>
                                                <TableCell>
                                                    <div className='flex place-items-center gap-2'>
                                                        <span onClick={() => handleUpdate(contact)} className='edit-icon hover:cursor-pointer'><svg className='' width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.5 2.76777H2.66667C2.22464 2.76777 1.80072 2.94336 1.48816 3.25592C1.17559 3.56848 1 3.99241 1 4.43443V16.1011C1 16.5431 1.17559 16.9671 1.48816 17.2796C1.80072 17.5922 2.22464 17.7678 2.66667 17.7678H14.3333C14.7754 17.7678 15.1993 17.5922 15.5118 17.2796C15.8244 16.9671 16 16.5431 16 16.1011V10.2678M14.75 1.51777C15.0815 1.18625 15.5312 1 16 1C16.4688 1 16.9185 1.18625 17.25 1.51777C17.5815 1.84929 17.7678 2.29893 17.7678 2.76777C17.7678 3.23661 17.5815 3.68625 17.25 4.01777L9.33333 11.9344L6 12.7678L6.83333 9.43443L14.75 1.51777Z" stroke="#3B82F6" strokeWidth={2} /></svg></span>

                                                        <div onClick={() => handleDelete(contact)} className='bg-red-600 hover:bg-red-800 w-6 h-6 rounded-sm hover:cursor-pointer'></div>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                ) : ( <></> )
                            }
                        </TableBody>
                    </Table>
                </div>
            </Card>
        </div>
    )
}

export default TableContacts
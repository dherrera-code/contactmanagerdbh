import { Card, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react'
import { colors } from 'flowbite-react/plugin/tailwindcss/colors'
import React from 'react'

const TableContacts = () => {
    return (
        <div>
            <Card className='border-mist-300 border-b-2 rounded-b-none'>
                <h1 className='text-xl font-semibold '>All Contacts</h1>
            </Card>

            <Card className='rounded-none'>
                {/* <img src={"/assets/Icon.svg"} className='h-4 w-4'></img> */}
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
                        <TableBody className="divide-y">
                            <TableRow className="bg-white">
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Macademia Nuts
                                </TableCell>
                                <TableCell>MacadaNutz@gmail.co</TableCell>
                                <TableCell>209-234-4234</TableCell>
                                <TableCell>
                                    <div className='flex place-items-center gap-2'>

                                        <span className='edit-icon hover:cursor-pointer'><svg className='' width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.5 2.76777H2.66667C2.22464 2.76777 1.80072 2.94336 1.48816 3.25592C1.17559 3.56848 1 3.99241 1 4.43443V16.1011C1 16.5431 1.17559 16.9671 1.48816 17.2796C1.80072 17.5922 2.22464 17.7678 2.66667 17.7678H14.3333C14.7754 17.7678 15.1993 17.5922 15.5118 17.2796C15.8244 16.9671 16 16.5431 16 16.1011V10.2678M14.75 1.51777C15.0815 1.18625 15.5312 1 16 1C16.4688 1 16.9185 1.18625 17.25 1.51777C17.5815 1.84929 17.7678 2.29893 17.7678 2.76777C17.7678 3.23661 17.5815 3.68625 17.25 4.01777L9.33333 11.9344L6 12.7678L6.83333 9.43443L14.75 1.51777Z" stroke="#3B82F6" strokeWidth={2} /></svg></span>

                                        <div className='bg-red-600 hover:bg-red-800 w-6 h-6 rounded-sm hover:cursor-pointer'></div>
                                    </div>
                                </TableCell>
                            </TableRow>
                            {/* <TableRow className="bg-white">
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Microsoft Surface Pro
                                </TableCell>
                                <TableCell>White</TableCell>

                                <TableCell>$1999</TableCell>
                                <TableCell>
                                    <div className='flex place-items-center gap-2'>

                                        <span className='edit-icon hover:cursor-pointer'><svg className='hover:cursor-pointer' width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.5 2.76777H2.66667C2.22464 2.76777 1.80072 2.94336 1.48816 3.25592C1.17559 3.56848 1 3.99241 1 4.43443V16.1011C1 16.5431 1.17559 16.9671 1.48816 17.2796C1.80072 17.5922 2.22464 17.7678 2.66667 17.7678H14.3333C14.7754 17.7678 15.1993 17.5922 15.5118 17.2796C15.8244 16.9671 16 16.5431 16 16.1011V10.2678M14.75 1.51777C15.0815 1.18625 15.5312 1 16 1C16.4688 1 16.9185 1.18625 17.25 1.51777C17.5815 1.84929 17.7678 2.29893 17.7678 2.76777C17.7678 3.23661 17.5815 3.68625 17.25 4.01777L9.33333 11.9344L6 12.7678L6.83333 9.43443L14.75 1.51777Z" stroke="#3B82F6" strokeWidth={2} /></svg></span>

                                        <div className='bg-red-600 hover:bg-red-800 w-6 h-6 rounded-sm hover-element'></div>
                                    </div>
                                </TableCell>
                            </TableRow> */}
                        </TableBody>
                    </Table>
                </div>
            </Card>

            <Card className='rounded-t-none'>
                <div>
                    <Table>

                        <TableBody className='divide-y'>
                            {/* <TableRow>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>
                                <TableCell>Black</TableCell>

                                <TableCell>$99</TableCell>
                                <TableCell>
                                    <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                        Edit
                                    </a>
                                </TableCell>
                            </TableRow> */}
                            {/* <TableRow className="bg-white">
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Macademia Nuts
                                </TableCell>
                                <TableCell>MacadaNutz@gmail.co</TableCell>
                                <TableCell>209-234-4234</TableCell>
                                <TableCell>
                                    <div className='flex place-items-center gap-2'>

                                    <span className='edit-icon'><svg className='edit-icon' width="15" height="15" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5 2.76777H2.66667C2.22464 2.76777 1.80072 2.94336 1.48816 3.25592C1.17559 3.56848 1 3.99241 1 4.43443V16.1011C1 16.5431 1.17559 16.9671 1.48816 17.2796C1.80072 17.5922 2.22464 17.7678 2.66667 17.7678H14.3333C14.7754 17.7678 15.1993 17.5922 15.5118 17.2796C15.8244 16.9671 16 16.5431 16 16.1011V10.2678M14.75 1.51777C15.0815 1.18625 15.5312 1 16 1C16.4688 1 16.9185 1.18625 17.25 1.51777C17.5815 1.84929 17.7678 2.29893 17.7678 2.76777C17.7678 3.23661 17.5815 3.68625 17.25 4.01777L9.33333 11.9344L6 12.7678L6.83333 9.43443L14.75 1.51777Z" stroke="#3B82F6" /></svg></span>

                                    <div className='bg-red-600 w-6 h-6 rounded-sm'></div>
                                    </div>
                                </TableCell>

                            </TableRow> */}
                        </TableBody>

                    </Table>
                </div>
            </Card>
        </div>
    )
}

export default TableContacts
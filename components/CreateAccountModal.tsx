import { CreateUser } from '@/interfaces/interface'
import { createAccount } from '@/lib/user-services'
import { Button, Label, Modal, ModalBody, ModalHeader, TextInput } from 'flowbite-react'
import React, { Dispatch, SetStateAction, useState } from 'react'

interface CreateAccountProps {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    isSuccess: boolean | null
    setIsSuccess: Dispatch<SetStateAction<boolean | null>>;
}

const CreateAccountModal = ({isOpen, setIsOpen, isSuccess, setIsSuccess} : CreateAccountProps) => {
    // const [isOpenModal, setIsOpenModal] = useState(false)
    // Modal elements and function!
    const [newUsername, setNewUsername] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")



    // const [isSuccess, setIsSuccess] = useState<boolean>(false)


    const onCloseModal = () => {
        setIsOpen(false);
        setNewUsername("");
        setNewEmail("");
        setNewPassword("")
    }

    const handleCreateAccount = async () => {
        const newUser: CreateUser = {
            username: newUsername,
            email: newEmail,
            password: newPassword

        }
        const success = await createAccount(newUser);
        onCloseModal()
        // call toast notification with success message about account!
        if (success) setIsSuccess(true)
        else setIsSuccess(false)
        // setShowToast(true);
    }

    return (
        <div>
            <Modal show={isOpen} size="md" onClose={onCloseModal} popup>
                <ModalHeader />
                <ModalBody>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900">Create an Account</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="text">Your Username</Label>
                            </div>
                            <TextInput
                                id="text"
                                placeholder="Enter username"
                                value={newUsername}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email">Your email</Label>
                            </div>
                            <TextInput
                                id="email"
                                type='email'
                                placeholder="name@company.com"
                                value={newEmail}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password">Your password</Label>
                            </div>
                            <TextInput value={newPassword} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)} id="password" type="password" required />
                        </div>

                        <div className="flex justify-between">
                            <Button onClick={handleCreateAccount}>Create Account</Button>
                            <Button onClick={onCloseModal} className='bg-gray-400'>Close</Button>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default CreateAccountModal
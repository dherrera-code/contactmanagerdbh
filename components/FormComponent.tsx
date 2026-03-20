'use client'
import { CreateUser, Token } from '@/interfaces/interface';
import { createAccount, login } from '@/lib/user-services';
import { Toast, ToastToggle, Card, Label, Checkbox, Button, ModalBody, Modal, ModalHeader, TextInput } from 'flowbite-react'
import { redirect, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'
import CreateUserModal from './CreateUserModal';


const FormComponent = () => {
  const [loginParam, setLoginParams] = useState("");
  const [password, setPassword] = useState("");
  // add
  const [isRememberMe, setIsRememberMe] = useState<boolean | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false)

  const { push } = useRouter();

  const handleBool = () => {
    setIsRememberMe(!isRememberMe);
    console.log(isRememberMe);
  }
  const handleOpenModal = () => {
    setIsOpenModal(true)
  }
  //handling login!!
  const handleSubmit = async () => {
    const user = {
      loginParam,
      password
    }
    console.log(isRememberMe);
    console.log(user)

    const token: Token | null = await login(user);
    console.log(token?.token);
    console.log(token);
    if (token != null) {
      if (typeof window != null) {
        if (isRememberMe) {
          console.log(isRememberMe);
          localStorage.setItem("token", token.token);
        }
        push("/Dashboard");
      } else {
        alert("Login error! Password no good")
      }
    }

  }
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      redirect("/Dashboard")
    }
  }, [])
  // Modal elements and function!
  const [newUsername, setNewUsername] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")

  function onCloseModal() {
    setIsOpenModal(false);
    setNewUsername("");
    setNewEmail("");
    setNewPassword("")
  }

  const handleCreateAccount = async () => {
    const newUser : CreateUser = {
      username : newUsername,
      email : newEmail,
      password : newPassword

    }
    const success = await createAccount(newUser);

    console.log(success) //returns a bool (true or false)
    onCloseModal()
    // call toast notification with success message about account!
    if(success) {
      setIsSuccess(true)
    }
      else setIsSuccess(false)

    setShowToast(true);
  }
  const [showToast, setShowToast] = useState(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  const toastMessage = (isSuccess: boolean) => {
    return (isSuccess) ? "Account Created" : "Account Not Created. Username or Email is already in use!";
  }

  return (
    <div className='py-5 inter'>

      <div>
        <Modal show={isOpenModal} size="md" onClose={onCloseModal} popup>
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

      <div className="flex flex-col gap-4 mb-5 shadow-2xs">
        <Toast className="min-w-md bg-purple-100">
          <div className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ">
            <img src="/assets/i-icon.png" alt="" />
          </div>
          <div className="ml-3 text-sm font-normal">Welcome back! All systems are operational.</div>
          <ToastToggle />
        </Toast>
      </div>
{/* Pop up toast notification when user is created or not! */}
      { showToast && (<div className="flex flex-col gap-4 mb-5 shadow-2xs">
        <Toast className="min-w-md bg-purple-100">
          <div className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ">
            <img src="/assets/i-icon.png" alt="" />
          </div>
          <div className="ml-3 text-sm font-normal">{toastMessage(isSuccess!)}</div>
          <ToastToggle />
        </Toast>
      </div>)}

      <Card className="max-w-md">
        <h1 className="text-center font-bold text-3xl pt-6">Sign In</h1>
        <p>Enter your credentials to access your workspace.</p>

        <form className="flex max-w-md flex-col gap-4">
          <div className="flex flex-col">

            <div className="mb-2 block">
              <Label htmlFor="text">Email or Username</Label>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <img src="/assets/mail.png" className="w-4.5 h-4.5" alt="Mail image" />
              </div>
              <input onChange={(e) => setLoginParams(e.target.value)} type="text" id="text" className="block w-100 h-10 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="alex.morgan@design.com" required />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password">Password</Label>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <img src="/assets/Lock-Icon.svg" className="w-4.5 h-4.5" alt="Lock Icon" />
              </div>
              <input onChange={(e) => setPassword(e.target.value)} type="text" id="password" className="block w-100 h-10 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="alex.morgan@design.com" required />
              <div className='absolute inset-y-0 start-92 flex items-center pe-3 pointer-events-auto'>
                <img className='w-5 h-5' src="/assets/Eye.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="flex items-center gap-2">
              <Checkbox onClick={handleBool} className="cursor-pointer" id="remember" />
              <Label htmlFor="remember">Keep me signed in</Label>
            </div>
            <div className="place-items-end">
              <button className="flex a-tag">Forgot Password?</button>
            </div>
          </div>
          <Button onClick={handleSubmit} className="cursor-pointer">Sign In to Dashboard </Button>
        </form>
      </Card>
      <Card className="rounded-t-none">
        <div className="grid grid-cols-2 place-items-center">

          <div>
            <p>New to the platform?</p>
          </div>
          <div>
            <button onClick={handleOpenModal} className="a-tag">Create an account</button>

          </div>
        </div>
      </Card>

      <div className='shadow-2xs mt-3 text-center flex justify-center mt-10'>
        <div className='green-dot me-2 '></div>
        <p className='text-[12px]'>Secure AES-256 ENCRYPTION ACTIVE</p>
      </div>
    </div>
  )
}

export default FormComponent
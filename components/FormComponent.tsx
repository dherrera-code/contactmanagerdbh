'use client'
import { Token } from '@/interfaces/interface';
import { login } from '@/lib/user-services';
import { Toast, ToastToggle, Card, Label, Checkbox, Button, ModalBody, Modal, ModalHeader, TextInput } from 'flowbite-react'
import { redirect, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'
import ErrorMessageModal from './ErrorMessageModal';
import CreateAccountModal from './CreateAccountModal';
import { HiExclamationCircle } from 'react-icons/hi';


const FormComponent = () => {
  const [loginParam, setLoginParams] = useState("");
  const [password, setPassword] = useState("");

  const [isRememberMe, setIsRememberMe] = useState<boolean | null>(null);
  const [isError, setIsError] = useState(false)
  const [failLogin, setFailLogin] = useState(false)
  const [message, setMessage] = useState("")
  // use state to allow user to create an account!
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  // create another useState boolean to allow user to see their password inputs
  const [viewPassword, setViewPassword] = useState(false)

  const { push } = useRouter();

  const handleBool = () => {
    setIsRememberMe(!isRememberMe);
  }

  const toggleViewPassword = () => {
    setViewPassword(!viewPassword)
  }
  //handling login!!
  const handleSubmit = async () => {
    const user = {
      loginParam,
      password
    }

    const token: Token | null = await login(user);
    console.log(token)
    if (token != null) {
      if (typeof window != null) {
        if (isRememberMe) {
          localStorage.setItem("token", token.token);
        }
        else {
          sessionStorage.setItem("token", token.token);
        }
        push("/Dashboard");
      }
    }
    else { // if token is null!!!
      // add logic to tell user unable to login 
      setFailLogin(true);
    }
  }

  const handleToggleModal = () => {
    setIsCreateOpen(true);
  }
// this useState bool is used to test if account creation was successful!
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null)

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      redirect("/Dashboard")
    }

    if (isSuccess) {
      setMessage("Account creation Successful!")
      setIsError(true) // used to open modal
    }
    else if (isSuccess != null) {
      setMessage("Account creation failed! Email is already in use Or Username is already taken!")
      setIsError(true) // used to open modal again
    }
  
    setIsSuccess(null)
  }, [isSuccess])

  return (
    <div className='py-5 inter'>
      <ErrorMessageModal message={message} isOpen={isError} setIsOpen={setIsError} ></ErrorMessageModal>
      <CreateAccountModal isOpen={isCreateOpen} setIsOpen={setIsCreateOpen} isSuccess={isSuccess} setIsSuccess={setIsSuccess}></CreateAccountModal>

      <div className="flex flex-col gap-4 mb-5 shadow-2xs">
        <Toast className="min-w-md bg-purple-100">
          <div className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ">
            <img src="/assets/i-icon.png" alt="" />
          </div>
          <div className="ml-3 text-sm font-normal">Welcome back! All systems are operational.</div>
          <ToastToggle />
        </Toast>
      </div>


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
                <img src="/assets/lock-icon.svg" className="w-4.5 h-4.5" alt="Lock Icon" />
              </div>

              <input onChange={(e) => setPassword(e.target.value)} type={`${viewPassword ? "text" : "password"}`} id="password" className={`block w-100 h-10 p-4 ps-10 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ${failLogin ? 'border-2 border-red-600' : 'border border-gray-300'} `} placeholder="alex.morgan@design.com" required />

              <div className='absolute inset-y-0 start-92 flex items-center pe-3 pointer-events-auto'>
                <img onClick={toggleViewPassword} className='w-5 h-5 cursor-pointer' src={`/assets/${viewPassword ? 'eye-slash.svg' : "Eye.svg"}`}  alt="Toggle to view password" />
              </div>
              </div>
              {failLogin && (
                <div className='flex pt-2'>
                  <HiExclamationCircle className='me-2 text-red-600' />
                <p className='text-xs text-red-600'>The password you entered is incorrect. Please try again.</p>
              </div>
              )}
          </div>

          <div className="grid grid-cols-2">
            <div className="flex items-center gap-2">
              <Checkbox onClick={handleBool} className="cursor-pointer" id="remember" />
              <Label htmlFor="remember">Keep me signed in</Label>
            </div>
            <div className="place-items-end">
              <button onClick={handleToggleModal} className="flex a-tag">Forgot Password?</button>
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
            <button onClick={handleToggleModal} className="a-tag">Create an account</button>

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
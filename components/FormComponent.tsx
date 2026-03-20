'use client'
import { Token } from '@/interfaces/interface';
import { login } from '@/lib/user-services';
import { Toast, ToastToggle, Card, Label, Checkbox, Button } from 'flowbite-react'
import { useRouter } from 'next/navigation';
import { useState } from 'react'

const FormComponent = () => {
  const [loginParam, setLoginParams] = useState("");
  const [password, setPassword] = useState("");

  const [isRememberMe, setIsRememberMe] = useState<boolean>(true);

  const { push } = useRouter();

  const handleBool = () => setIsRememberMe(!isRememberMe);
  //handling login!!
  const handleSubmit = async () => {
    const user = {
      loginParam,
      password
    }
    console.log(user)

    const token: Token | null = await login(user);
    console.log(token?.token);
    console.log(token);
    if (token != null) {
      if (typeof window != null) {
        localStorage.setItem("token", token.token);
        push("/Dashboard");
      } else {
        alert("Login error! Password no good")
      }
    }

  }


  return (
    <div>
      <div className="flex flex-col gap-4 mb-5">
        <Toast className="min-w-md bg-purple-100">
          <div className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ">
            <img src="/assets/i-icon.png" alt="" />
          </div>
          <div className="ml-3 text-sm font-normal">Welcome back! All systems are operational.</div>
          <ToastToggle />
        </Toast>

      </div>
      <Card className="max-w-lg min-w-md">
        <h1 className="text-center font-bold text-4xl pt-6">Sign In</h1>
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
                <img src="/assets/lock-Icon.svg" className="w-4.5 h-4.5" alt="Lock Icon" />
              </div>
              <input onChange={(e) => setPassword(e.target.value)} type="text" id="password" className="block w-100 h-10 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="alex.morgan@design.com" required />
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="flex items-center gap-2">
              <Checkbox className="cursor-pointer" id="remember" />
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
            <button className="a-tag ">Create an account</button>

          </div>
        </div>
      </Card>
    </div>
  )
}

export default FormComponent
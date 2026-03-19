
import FooterLogin from "@/components/FooterLogin";
import InputContact from "@/components/InputContact";
import TableContacts from "@/components/TableContacts";
import { Button, Card, Checkbox, Label, TextInput, Toast, ToastToggle } from "flowbite-react";
import { HiCheck, HiExclamation, HiFolder, HiHome, HiMail, HiX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import FormComponent from "@/components/FormComponent";
import LoginNavbar from "@/components/LoginNavbar";

export default function Home() {
  return (
    <div>
      <LoginNavbar></LoginNavbar>
      <div className="overflow-y-auto flex-1">
        <div className="min-h-screen bg-zinc-50 font-sans text-black overflow-y-auto">
          <main className="min-h-screen flex justify-center items-center">

            <FormComponent />
          </main>
        </div>
      </div>
      <FooterLogin />
    </div>
  );
}

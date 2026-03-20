
import FooterLogin from "@/components/FooterLogin";
import FormComponent from "@/components/FormComponent";
import LoginNavbar from "@/components/LoginNavbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <LoginNavbar></LoginNavbar>
      <div className="min-h-[80vh] flex-1">
        <div className=" bg-zinc-50 font-sans text-black">
          <main className=" flex justify-center items-center">

            <FormComponent />
          </main>
        </div>
      </div>
      <FooterLogin />
    </div>
  );
}

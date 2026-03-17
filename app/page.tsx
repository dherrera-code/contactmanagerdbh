import InputContact from "@/components/InputContact";
import TableContacts from "@/components/TableContacts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-black">
      <main className="grid grid-cols-2 p-5">
        {/* Here will have our add new contact/ update contact */}
        <div className="w-[]">
          <InputContact />
        </div>
        <div className="w-[]">
          <h1>Hello</h1>
          <TableContacts />
        </div>

      </main>
    </div>
  );
}

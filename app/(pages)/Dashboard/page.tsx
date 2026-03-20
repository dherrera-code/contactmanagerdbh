import InputContact from "@/components/InputContact";
import TableContacts from "@/components/TableContacts";

export default function Home() {
  return (
    <div className=" bg-zinc-50 font-sans text-black">
      <main className="grid grid-cols-[1fr_2fr] gap-y-6 gap-x-5 p-5">
        {/* Here will have our add new contact/ update contact */}
        <div className="min-w-xs">
          <InputContact />
        </div>
        <div className="min-w-2/3">
          <TableContacts />
        </div>

      </main>
    </div>
  );
}

// import Image from "next/image";
import UserList from "@/components/elements/UserList";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[10px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-10">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl">Список пользователей</h1>
        <UserList />
      </main>
    </div>
  );
}

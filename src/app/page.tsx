import Header from "@/components/elements/Header";
import UserList from "@/components/elements/UserList";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen px-8 py-2 gap-8 sm:px-10 sm:py-4">
      <header className="row-start-1">
        <Header />
      </header>
      <main className="flex flex-col gap-[14px] row-start-2 items-center">
        <h1 className="text-2xl self-center">Список пользователей</h1>
        <UserList />
      </main>
      <footer>
        <h3>© 2025</h3>
      </footer>
    </div>
  );
}

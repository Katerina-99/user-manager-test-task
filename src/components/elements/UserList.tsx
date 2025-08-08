import { User } from "@/types/user";
import UserCard from "./UserCard";

async function getUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 60 },
    // cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Не удалось загрузить пользователей");
  }

  return res.json();
}

export default async function UserList() {
  const users = await getUsers();

  return (
    <div className="flex flex-col gap-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

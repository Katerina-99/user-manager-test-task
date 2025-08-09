"use client";

import { User } from "@/types/user";
import { useEffect } from "react";
import UserCard from "./UserCard";
import { useUserContext } from "@/context/UserContext";

export default function UserList() {
  const { users, setUsers, filteredUsers } = useUserContext();
  console.log(filteredUsers);
  console.log(users);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data: User[] = await res.json();
      setUsers(data);
    }

    if (users.length == 0) {
      fetchUsers();
    }
  }, [users.length, setUsers]);

  if (filteredUsers.length === 0) {
    return <p>Нет пользователей по заданным критериям.</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      {filteredUsers.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onDelete={(id) =>
            setUsers((prev) => prev.filter((user) => user.id !== id))
          }
        />
      ))}
    </div>
  );
}

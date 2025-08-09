"use client";

import { User } from "@/types/user";
import { useEffect } from "react";
import UserCard from "./UserCard";
import { useUserContext } from "@/context/UserContext";

export default function UserList() {
  const { users, setUsers } = useUserContext();

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

  return (
    <div className="flex flex-col gap-4">
      {users.map((user) => (
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

"use client";

import UserCard from "./UserCard";
import { useUserContext } from "@/context/UserContext";
import { Skeleton } from "@/components/ui/skeleton";
import ErrorCard from "./ErrorCard";

export default function UserList() {
  const { setUsers, filteredUsers, isLoading, error } = useUserContext();

  if (error) {
    return (
      <ErrorCard
        message={error}
        onRetry={() => {
          setUsers([]);
        }}
      />
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4 w-full max-w-sm">
        {[...Array(6)].map((item, index) => (
          <div
            key={index}
            className="p-8 border border-gray-300 rounded-lg shadow-md bg-white"
          >
            <Skeleton className="h-8 w-60 mb-4 rounded-md" />
            <Skeleton className="h-4 w-34 mb-2 rounded-md" />
            <Skeleton className="h-4 w-42 mb-2 rounded-md" />
            <Skeleton className="h-4 w-26 mb-4 rounded-md" />
            <Skeleton className="h-9 w-60 mb-2 rounded-md" />
            <Skeleton className="h-9 w-60 rounded-md" />
          </div>
        ))}
      </div>
    );
  }

  if (filteredUsers.length === 0) {
    return <p>Нет пользователей по заданным критериям.</p>;
  }

  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
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

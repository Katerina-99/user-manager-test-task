"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "@/types/user";

interface UserContextType {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  companyFilter: string;
  setCompanyFilter: React.Dispatch<React.SetStateAction<string>>;
  filteredUsers: User[];
  isLoading: boolean;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

const UserContext = createContext<UserContextType>({
  users: [],
  setUsers: () => {},
  search: "",
  setSearch: () => {},
  companyFilter: "",
  setCompanyFilter: () => {},
  filteredUsers: [],
  isLoading: true,
  error: null,
  setError: () => {},
});

export function UserProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      setIsLoading(true);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok)
          throw new Error("Ошибка сети: не удалось загрузить пользователей");
        const data: User[] = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Неизвестная ошибка");
      } finally {
        setIsLoading(false);
      }
    }

    if (users.length == 0) {
      fetchUsers();
    }
  }, [users.length, setUsers]);

  const filteredUsers = users.filter((user) => {
    const lowerSearch = search.toLowerCase();

    const matchesSearch = user.name.toLowerCase().includes(lowerSearch);

    const matchesCompany =
      companyFilter === "all" || companyFilter === ""
        ? true
        : user.company.name === companyFilter;

    return matchesSearch && matchesCompany;
  });

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        search,
        setSearch,
        companyFilter,
        setCompanyFilter,
        filteredUsers,
        isLoading,
        error,
        setError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}

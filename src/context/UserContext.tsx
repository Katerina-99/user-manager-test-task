"use client";

import React, { createContext, useContext, useState } from "react";
import { User } from "@/types/user";

interface UserContextType {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  companyFilter: string;
  setCompanyFilter: React.Dispatch<React.SetStateAction<string>>;
  filteredUsers: User[];
}

const UserContext = createContext<UserContextType>({
  users: [],
  setUsers: () => {},
  search: "",
  setSearch: () => {},
  companyFilter: "",
  setCompanyFilter: () => {},
  filteredUsers: [],
});

export function UserProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");

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
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}

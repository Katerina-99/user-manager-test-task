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
}

const UserContext = createContext<UserContextType>({
  users: [],
  setUsers: () => {},
  search: "",
  setSearch: () => {},
  companyFilter: "",
  setCompanyFilter: () => {},
});

export function UserProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        search,
        setSearch,
        companyFilter,
        setCompanyFilter,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}

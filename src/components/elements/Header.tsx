"use client";

import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUserContext } from "@/context/UserContext";
import AddUserModal from "./AddUserModal";

export default function Header() {
  const { users, search, setSearch, companyFilter, setCompanyFilter } =
    useUserContext();

  const companyNames: string[] = [];
  users.forEach((user) => {
    if (!companyNames.includes(user.company.name)) {
      companyNames.push(user.company.name);
    }
  });

  return (
    <div className="flex gap-2 flex-wrap justify-center px-10 sm:flex-nowrap">
      <Input
        placeholder="Поиск по имени..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Select
        value={companyFilter}
        onValueChange={(value) => setCompanyFilter(value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Выбери компанию" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Компании</SelectLabel>
            <SelectItem value="all">Все компании</SelectItem>
            {companyNames.map((name) => (
              <SelectItem key={name} value={name}>
                {name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <AddUserModal />

      {/* <Button onClick={() => console.log("Открывается модалка")}>
        Добавить пользователя
      </Button> */}
    </div>
  );
}

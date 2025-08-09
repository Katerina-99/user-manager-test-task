"use client";

import { useUserContext } from "@/context/UserContext";
import { useParams, useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import EditUserModal from "./EditUserModal";

export default function UserDetailCard() {
  const router = useRouter();
  const { id } = useParams();
  const userId = Number(id);

  const { users } = useUserContext();

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return <p>Пользователь не найден</p>;
  }

  return (
    <Card className="w-full max-w-sm gap-4 p-4">
      <CardHeader>
        <CardTitle>Карточка пользователя</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p>
          <strong>Имя: </strong>
          {user.name}
        </p>
        <p>
          <strong>Полное имя: </strong>
          {user.username}
        </p>
        <p>
          <strong>Email: </strong>
          {user.email}
        </p>
        <p>
          <strong>Адрес: </strong>
          {user.address.street}, {user.address.city}, {user.address.zipcode}
        </p>
        <p>
          <strong>Телефон: </strong>
          {user.phone}
        </p>
        <p>
          <strong>Вебсайт: </strong>
          {user.website}
        </p>
        <p>
          <strong>Компания: </strong>
          {user.company.name}
        </p>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button
          className="w-full cursor-pointer"
          onClick={() => router.push("/")}
        >
          Назад
        </Button>
        <EditUserModal />
      </CardFooter>
    </Card>
  );
}

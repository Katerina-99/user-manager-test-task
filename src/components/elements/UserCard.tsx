import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { User } from "@/types/user";

interface UserCardProps {
  user: User;
  onDelete: (id: number) => void;
}

export default function UserCard({ user, onDelete }: UserCardProps) {
  return (
    <Card className="w-full max-w-sm gap-4">
      <CardHeader>
        <CardTitle>Карточка пользователя</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.company.name}</p>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full cursor-pointer" asChild>
          <Link href={`/user/${user.id}`}>Подробнее</Link>
        </Button>
        <Button
          variant="outline"
          className="w-full cursor-pointer"
          onClick={() => onDelete(user.id)}
        >
          Удалить
        </Button>
      </CardFooter>
    </Card>
  );
}

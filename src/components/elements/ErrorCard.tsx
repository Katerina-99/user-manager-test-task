import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ErrorCardProps {
  message: string;
  onRetry: () => void;
}

export default function ErrorCard({ message, onRetry }: ErrorCardProps) {
  return (
    <Card className="w-full min-w-xs max-w-sm gap-4 border-red-500">
      <CardHeader>
        <CardTitle className="text-red-500">Ошибка</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{message}</p>
      </CardContent>
      <CardFooter className="flex-col">
        <Button className="w-full cursor-pointer" onClick={onRetry}>
          Повторить
        </Button>
      </CardFooter>
    </Card>
  );
}

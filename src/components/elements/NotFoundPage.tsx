import Link from "next/link";
import { Button } from "../ui/button";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 max-w-9/10 mx-auto p-10">
      <h2>Страница не найдена</h2>
      <Button asChild>
        <Link href="/">Вернуться на главную</Link>
      </Button>
    </div>
  );
}

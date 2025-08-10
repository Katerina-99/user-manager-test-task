"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useUserContext } from "@/context/UserContext";
import { User } from "@/types/user";

export default function AddUserModal() {
  const { setUsers } = useUserContext();
  const [newUserValue, setNewUserValue] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    company: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUserValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !newUserValue.name.trim() ||
      !newUserValue.username.trim() ||
      !newUserValue.email.trim() ||
      !newUserValue.phone.trim() ||
      !newUserValue.website.trim() ||
      !newUserValue.company.trim()
    ) {
      alert("Пожалуйста, заполните все обязательные поля.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(newUserValue.email)) {
      alert("Введите корректный email.");
      return;
    }

    if (!/^\+?\d+$/.test(newUserValue.phone)) {
      alert(
        "Телефон должен содержать только цифры (и, при необходимости, + в начале)."
      );
      return;
    }

    const newUser: User = {
      id: Date.now(),
      name: newUserValue.name,
      username: newUserValue.username,
      email: newUserValue.email,
      phone: newUserValue.phone,
      website: newUserValue.website,
      company: { name: newUserValue.company, catchPhrase: "", bs: "" },
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
      },
    };

    setUsers((prev) => [...prev, newUser]);
    resetInputs();
  };

  const resetInputs = () => {
    setNewUserValue({
      name: "",
      username: "",
      email: "",
      phone: "",
      website: "",
      company: "",
    });
  };

  const isFormValid =
    newUserValue.name.trim() &&
    newUserValue.username.trim() &&
    newUserValue.email.trim() &&
    newUserValue.phone.trim() &&
    newUserValue.website.trim() &&
    newUserValue.company.trim();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          Добавить пользователя
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Добавить пользователя</DialogTitle>
            <DialogDescription>
              Заполните все поля и сохраните
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 mb-2">
            <div className="grid gap-1">
              <Label htmlFor="name">Имя:</Label>
              <Input
                id="name"
                name="name"
                value={newUserValue.name}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="username">Полное имя:</Label>
              <Input
                id="username"
                name="username"
                value={newUserValue.username}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="email">Email:</Label>
              <Input
                id="email"
                name="email"
                value={newUserValue.email}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="phone">Телефон:</Label>
              <Input
                id="phone"
                name="phone"
                value={newUserValue.phone}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="website">Вебсайт:</Label>
              <Input
                id="website"
                name="website"
                value={newUserValue.website}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="company">Компания:</Label>
              <Input
                id="company"
                name="company"
                value={newUserValue.company}
                onChange={handleChange}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" onClick={resetInputs}>
                Закрыть
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit" disabled={!isFormValid}>
                Добавить
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

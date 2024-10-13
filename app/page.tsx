"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Logo from "@/components/Logo";

export default function Home() {
  const router = useRouter();

  return (
    <div className="container-full h-screen w-full flex items-center justify-center flex-col px-4">
      <Logo />
      <p className="text-center text-[14px] text-neuters-gray-70 my-16">
        Monitore, cuide, viva melhor. <br />
        Juntos pela sua tiróide.
      </p>

      <div className="flex flex-col gap-y-4 w-full md:w-1/4 ">
        <Button href="/register"> Cadastrar</Button>
        <Button variant="secondary" href="/login">
          Acessar
        </Button>
      </div>
    </div>
  );
}

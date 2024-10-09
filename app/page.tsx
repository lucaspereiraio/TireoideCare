"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="container-full h-screen w-full flex items-center justify-center flex-col">
      <Image
        src="/images/logo.png"
        alt="Logo TireoideCare"
        width={398}
        height={249}
      />
      <p className="text-center text-[14px] text-neuters-gray-70 my-16">
        Monitore, cuide, viva melhor. <br />
        Juntos pela sua tiróide.
      </p>

      <div className="flex flex-col gap-y-4">
        <button
          className="rounded-xl w-40 h-11 bg-primary-100 text-neuters-gray-20 font-semibold"
          onClick={() => router.push("/register")}
        >
          Cadastrar
        </button>
        <button
          className="rounded-xl w-40 h-11 bg-primary-20 text-neuters-gray-70 font-semibold"
          onClick={() => router.push("/login")}
        >
          Acessar
        </button>
      </div>
    </div>
  );
}

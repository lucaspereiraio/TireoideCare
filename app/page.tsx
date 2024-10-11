import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container w-full flex items-center justify-center gap-8">
      <Link href="/login">
        <button>Login</button>
      </Link>
      <Link href="/register">
        <button>Cadastro</button>
      </Link>
    </div>
  );
}

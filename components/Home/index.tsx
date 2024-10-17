"use client";

import React from "react";
import Title from "../Title";
import { FaArrowLeft } from "react-icons/fa";

const Home = () => {
  return (
    <section className="container-full w-full h-screen flex flex-col justify-center align-center">
      <Title>Em construção...</Title>
      <div className="w-full text-sm">
        <a
          className="flex items-center justify-center gap-1 hover:text-primary-100 hover:font-medium"
          href="/"
        >
          <FaArrowLeft />
          <div>Voltar às opções de login</div>
        </a>
      </div>
    </section>
  );
};

export default Home;

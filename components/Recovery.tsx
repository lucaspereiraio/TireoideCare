"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Title from "./Title";
import Logo from "./Logo";
import InputField from "./Input";
import Button from "./Button";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Email é obrigatório"),
});

const Recovery = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("Formulário enviado:", data); 
  };

  return (
    <section className="container-full h-screen w-full flex items-center justify-center flex-col px-4">
      <Logo />
      <Title>Recuperar Senha</Title>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-1/4 flex flex-col items-center gap-y-4"
      >
        <InputField
          control={control}
          label="Email"
          name="email"
          placeholder="Digite seu email"
          type="email"
          errorMessage={errors.email?.message}
        />
        <div className="flex flex-col gap-y-4 w-full mt-8">
          <Button type="submit"> Recuperar Senha</Button>
          <Button variant="secondary" href="/login">
            Voltar
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Recovery;

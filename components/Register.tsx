"use client";

import Image from "next/image";
// import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Title from "./Title";
import Button from "./Button";
import Logo from "./Logo";
import InputField from "./Input";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Email é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
});

const Register = () => {
  // const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
    shouldFocusError: true,
  });

  console.log(errors, "errors");

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <section className="container-full min-h-screen w-full flex items-center justify-center flex-col px-4">
      <Logo />
      <Title>Cadastrar</Title>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-1/4 flex flex-col items-center gap-y-4"
      >
        <InputField
          name="email"
          control={control}
          label="Email"
          type="email"
          placeholder="Digite seu e-mail"
          errorMessage={errors.email?.message}
        />

        <InputField
          name="password"
          control={control}
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          errorMessage={errors.password?.message}
          isPassword={true}
        />

        <Button className="mt-4" type="submit">
          Cadastrar
        </Button>
        <p className="text-[14px] text-neuters-gray-70">ou acesse com</p>
        <div className="flex gap-2 w-full">
          <button
            className="h-10 w-full  flex justify-center items-center gap-2 border border-neuters-gray-60 rounded-md"
            type="button"
          >
            <Image
              src="/images/google.svg"
              alt="Logo Google"
              width={24}
              height={24}
            />
            Google
          </button>
          <button
            className="h-10 w-full flex justify-center items-center gap-2 border border-neuters-gray-60 rounded-md"
            type="button"
          >
            <Image
              src="/images/apple.svg"
              alt="Logo Apple"
              width={24}
              height={24}
            />
            Apple
          </button>
        </div>
      </form>

      <p className="mt-6 text-neuters-gray-70">
        Já tem uma conta?{" "}
        <a className="text-primary-100 font-medium ml-1" href="/login">
          Acessar Conta
        </a>
      </p>
    </section>
  );
};

export default Register;

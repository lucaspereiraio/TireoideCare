"use client";

import React from "react";
import InputField from "./Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Logo from "./Logo";
import Title from "./Title";
import Button from "./Button";
import Image from "next/image";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Email é obrigatório"),
  password: yup
    .string()
    // .min(6, "Senha inválida")
    // .max(100, "Senha inválida")
    .required("Senha é obrigatória"),
});

const Login = () => {
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

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <section className="container-full w-full flex items-center flex-col px-4">
      <Logo />
      <Title>Acessar Conta</Title>

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
        <div className="w-full text-end text-sm">
          <a
            className="hover:text-primary-100 hover:font-medium"
            href="/recovery"
          >
            Esqueceu sua senha?
          </a>
        </div>

        <Button type="submit" className="my-4">
          Login
        </Button>
        <p className="text-[14px] text-neuters-gray-70 ">ou acesse com</p>
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
        Ainda não tem uma conta?
        <a className="text-primary-100 hover:font-medium ml-1" href="/register">
          Cadastre-se
        </a>
      </p>
    </section>
  );
};

export default Login;

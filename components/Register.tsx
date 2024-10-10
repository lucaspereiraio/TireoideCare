"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Definindo o esquema de validação com Yup
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
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="container-full min-h-screen w-full flex items-center justify-center flex-col px-4">
      <Image
        src="/images/logo.png"
        alt="Logo TireoideCare"
        width={398}
        height={249}
      />

      <h1 className="text-center text-xl text-neuters-gray-70 my-4">
        Cadastrar
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-1/4 flex flex-col items-center gap-y-4"
      >
        {/* Campo de Email */}
        <div className="w-full flex flex-col gap-y-2">
          <label className="text-sm text-neuters-gray-70" htmlFor="email">
            Email
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                className={`border ${
                  errors.email ? "border-red-500" : "border-neuters-gray-70"
                } border-opacity-50 rounded-lg h-11 px-4 focus:outline-none focus:border-primary-100 focus:ring-1 focus:ring-primary-100`}
                id="email"
                type="email"
                placeholder="Digite seu email"
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Campo de Senha */}
        <div className="w-full flex flex-col gap-y-2">
          <label className="text-sm text-neuters-gray-70" htmlFor="password">
            Senha
          </label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                className={`border ${
                  errors.password ? "border-red-500" : "border-neuters-gray-70"
                } border-opacity-50 rounded-lg h-11 px-4 focus:outline-none focus:border-primary-100 focus:ring-1 focus:ring-primary-100`}
                id="password"
                type="password"
                placeholder="Digite sua senha"
              />
            )}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div className="h-[1.5px] w-64 bg-neuters-gray-70 bg-opacity-50 mt-6 mb-2"></div>
        <div className="flex gap-x-2">
          <Image
            src="/images/facebook.png"
            alt="Facebbok"
            width={24}
            height={24}
          />
          <Image
            src="/images/instagram.png"
            alt="Instagram"
            width={24}
            height={24}
          />
          <Image src="/images/google.png" alt="Google" width={24} height={24} />
        </div>

        <button
          type="submit"
          className="rounded-xl w-40 h-11 bg-primary-100 text-neuters-gray-20 my-4 font-semibold"
        >
          Entrar
        </button>
      </form>

      <p>
        Já tem uma conta?{" "}
        <a className="text-primary-100 font-medium" href="/login">
          Acessar
        </a>
      </p>
    </div>
  );
};

export default Register;

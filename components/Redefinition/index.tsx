"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "../Input";
import Logo from "../Logo";
import Title from "../Title";
import Button from "../Button";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  newPassword: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), undefined], "As senhas devem ser iguais")
    .required("Confirmação de senha é obrigatória"),
});

const Redefinition = () => {
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

    toast.success("Senha redefinida com sucesso!");
  };

  return (
    <section className="container-full min-h-screen w-full flex items-center justify-center flex-col px-4">
      <Logo />
      <Title>Redefinir Senha</Title>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-1/4 flex flex-col items-center gap-y-4"
      >
        <InputField
          control={control}
          label="Nova senha"
          name="newPassword"
          placeholder="Digite sua nova senha"
          type="password"
          errorMessage={errors.newPassword?.message}
        />
        <InputField
          control={control}
          label="Confirmar nova senha"
          name="confirmPassword"
          placeholder="Digite sua nova senha"
          type="password"
          errorMessage={errors.confirmPassword?.message}
        />

        <Button className="mt-4" type="submit">
          Redefinir Senha
        </Button>
      </form>
    </section>
  );
};

export default Redefinition;

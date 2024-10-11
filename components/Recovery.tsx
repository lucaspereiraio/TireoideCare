"use client";

import React, { ChangeEvent, useState } from "react";
import { validateEmail } from "../utils/validators";

const Recovery = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //COLOCAR VALIDAÇÃO DE EMAIL EM REGEX???

    //VERIFICAÇÃO DO EMAIL NO BANCO DE DADOS (BACKEND)
    const emailError = validateEmail(email);
    if (emailError) {
      setMessage(emailError);
    } else {
      setMessage(
        "Caso o email esteja cadastrado em nosso banco de dados um link de recuperação de senha foi enviado ao seu email."
      );
    }
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <section>
      <h1>Recuperação de Senha</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            // type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <button type="submit">Enviar link de recuperação</button>
      </form>
      {message && <p>{message}</p>}
    </section>
  );
};

export default Recovery;

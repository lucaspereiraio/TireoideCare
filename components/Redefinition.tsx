"use client";

import React, { ChangeEvent, useState } from "react";
import { validatePassword } from "../utils/validators";

const Redefinition = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const passwordError = validatePassword(password);
    if (passwordError) {
      setMessage(passwordError);
    } else if (password !== confirmPassword) {
      setMessage("As senhas não coincidem.");
    } else {
      setMessage("Senha redefinida com sucesso.");
      // IMPLEMENTAR A LÓGICA COM O BACKEND
    }
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <section>
      <h1>Redefinir Senha</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password">Nova Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Digite sua nova senha"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirme a Nova Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Confirme sua nova senha"
            value={confirmPassword}
            onChange={handleConfirmPassword}
          />
        </div>
        <button type="submit">Redefinir Senha</button>
        {message && <p>{message}</p>}
      </form>
    </section>
  );
};

export default Redefinition;

"use client";

import { validateLogin } from "@/utils/validators";
import React, { ChangeEvent, useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateLogin(formData.email, formData.password);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    window.alert("Login bem-sucedido!");
    console.log("Email", formData.email);
    console.log("Password", formData.password);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, password: e.target.value });
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            // type="email"
            placeholder="Digite seu email"
            value={formData.email}
            onChange={handleEmail}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            value={formData.password}
            onChange={handlePassword}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <a href="/recovery">Esqueceu sua senha?</a>
        <button type="submit">Login</button>
      </form>
      <p>
        Ainda não tem uma conta? <a href="/register">Cadastre-se</a>
      </p>
    </section>
  );
};

export default Login;

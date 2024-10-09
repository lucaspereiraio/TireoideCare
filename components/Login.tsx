import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  return (
    <section>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu email"
            value={formData.email}
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            value={formData.password}
          />
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
